"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle, ChevronRight, Loader2, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function WebsitePlanningForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    projectType: "business",
    projectTypeOther: "",
    projectDescription: "",
    timeline: "1month",
    budget: "1k5k",
    features: [] as string[],
    otherFeatures: "",
    existingBrand: false,
    brandAssets: [] as string[],
    colorPreference: "",
    stylePreference: "minimal",
    competitors: "",
    additionalInfo: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const steps = [
    { title: "Personal Info", description: "Tell us about yourself" },
    { title: "Project Details", description: "Describe your project" },
    { title: "Timeline & Budget", description: "Set your expectations" },
    { title: "Features", description: "What do you need?" },
    { title: "Design", description: "Your visual preferences" },
    { title: "Additional Info", description: "Any other details" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((id) => id !== featureId)
        : [...prev.features, featureId],
    }));
  };

  const handleBrandAssetToggle = (assetId: string) => {
    setFormData((prev) => ({
      ...prev,
      brandAssets: prev.brandAssets.includes(assetId)
        ? prev.brandAssets.filter((id) => id !== assetId)
        : [...prev.brandAssets, assetId],
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 0:
        if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          newErrors.email = "Invalid email format";
        }
        break;
      case 1:
        if (formData.projectType === "other" && !formData.projectTypeOther.trim()) {
          newErrors.projectTypeOther = "Please specify your project type";
        }
        if (!formData.projectDescription.trim()) {
          newErrors.projectDescription = "Project description is required";
        } else if (formData.projectDescription.trim().length < 10) {
          newErrors.projectDescription = "Please provide more details";
        }
        break;
      case 5:
        if (!formData.termsAccepted) {
          newErrors.termsAccepted = "You must accept the terms and conditions";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLastStep = currentStep === steps.length - 1;

  const featureOptions = [
    { id: "responsive", label: "Responsive Design" },
    { id: "ecommerce", label: "E-commerce Functionality" },
    { id: "blog", label: "Blog/News Section" },
    { id: "contact", label: "Contact Form" },
    { id: "gallery", label: "Image Gallery" },
    { id: "social", label: "Social Media Integration" },
    { id: "seo", label: "SEO Optimization" },
    { id: "analytics", label: "Analytics Integration" },
    { id: "newsletter", label: "Newsletter Signup" },
    { id: "chat", label: "Live Chat" },
    { id: "multilingual", label: "Multilingual Support" },
    { id: "membership", label: "Membership/Login Area" },
  ];

  const brandAssetOptions = [
    { id: "logo", label: "Logo" },
    { id: "colors", label: "Brand Colors" },
    { id: "fonts", label: "Typography/Fonts" },
    { id: "guidelines", label: "Brand Guidelines" },
    { id: "images", label: "Images/Photography" },
  ];

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-white pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
              <p className="text-lg text-gray-600 mb-8">
                Your website planning form has been submitted successfully. We'll be in touch with you shortly to
                discuss your project.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Return to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
              
             <Badge className="mb-4 bg-white/10 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
             Website Planning
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4">
              Let's Plan Your Dream Website
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out this form to help us understand your vision and requirements. We'll use this information to
              create a tailored proposal for your project.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                      index <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index < currentStep ? <Check className="h-5 w-5" /> : <span>{index + 1}</span>}
                  </div>
                  <span
                    className={`text-sm mt-2 font-medium ${index <= currentStep ? "text-blue-600" : "text-gray-500"}`}
                  >
                    {step.title}
                  </span>

                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-5 left-10 w-full h-0.5 ${
                        index < currentStep ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: currentStep === index ? 1 : 0, x: currentStep === index ? 0 : 20 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`${currentStep === index ? "block" : "hidden"}`}
              >
                {currentStep === index && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                    <p className="text-gray-600">{step.description}</p>

                    {/* Step 1: Personal Information */}
                    {currentStep === 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name*
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                              errors.fullName ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="John Doe"
                          />
                          {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address*
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                              errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="john@example.com"
                          />
                          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                          <p className="mt-1 text-xs text-gray-500">Optional, but helpful for quick communication</p>
                        </div>

                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                            Company/Organization
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="Your Company Ltd."
                          />
                          <p className="mt-1 text-xs text-gray-500">If applicable</p>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Project Details */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            What type of website do you need?*
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              { value: "business", label: "Business/Corporate" },
                              { value: "ecommerce", label: "E-commerce/Online Store" },
                              { value: "portfolio", label: "Portfolio/Personal" },
                              { value: "blog", label: "Blog/Content" },
                              { value: "other", label: "Other" },
                            ].map((option) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  type="radio"
                                  id={`projectType-${option.value}`}
                                  name="projectType"
                                  checked={formData.projectType === option.value}
                                  onChange={() => handleRadioChange("projectType", option.value)}
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor={`projectType-${option.value}`} className="ml-2 text-gray-700">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {formData.projectType === "other" && (
                          <div>
                            <label htmlFor="projectTypeOther" className="block text-sm font-medium text-gray-700 mb-1">
                              Please specify the type of website
                            </label>
                            <input
                              type="text"
                              id="projectTypeOther"
                              name="projectTypeOther"
                              value={formData.projectTypeOther}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                                errors.projectTypeOther ? "border-red-500" : "border-gray-300"
                              }`}
                              placeholder="Describe your website type"
                            />
                            {errors.projectTypeOther && (
                              <p className="mt-1 text-sm text-red-600">{errors.projectTypeOther}</p>
                            )}
                          </div>
                        )}

                        <div>
                          <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                            Project Description*
                          </label>
                          <textarea
                            id="projectDescription"
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleInputChange}
                            rows={5}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                              errors.projectDescription ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="Please describe your project, its purpose, and your goals for the website..."
                          />
                          <p className="mt-1 text-xs text-gray-500">
                            The more details you provide, the better we can understand your vision
                          </p>
                          {errors.projectDescription && (
                            <p className="mt-1 text-sm text-red-600">{errors.projectDescription}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Step 3: Timeline & Budget */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            When do you need the website completed?*
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              { value: "asap", label: "As soon as possible" },
                              { value: "1month", label: "Within 1 month" },
                              { value: "3months", label: "Within 3 months" },
                              { value: "6months", label: "Within 6 months" },
                              { value: "flexible", label: "Flexible/No rush" },
                            ].map((option) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  type="radio"
                                  id={`timeline-${option.value}`}
                                  name="timeline"
                                  checked={formData.timeline === option.value}
                                  onChange={() => handleRadioChange("timeline", option.value)}
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor={`timeline-${option.value}`} className="ml-2 text-gray-700">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            What is your budget range for this project?*
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              { value: "under1k", label: "Under $1,000" },
                              { value: "1k5k", label: "$1,000 - $5,000" },
                              { value: "5k10k", label: "$5,000 - $10,000" },
                              { value: "10kplus", label: "$10,000+" },
                              { value: "undecided", label: "Undecided/Need guidance" },
                            ].map((option) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  type="radio"
                                  id={`budget-${option.value}`}
                                  name="budget"
                                  checked={formData.budget === option.value}
                                  onChange={() => handleRadioChange("budget", option.value)}
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor={`budget-${option.value}`} className="ml-2 text-gray-700">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                          <p className="mt-2 text-xs text-gray-500">
                            This helps us recommend solutions that fit your budget
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Website Features */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            What features do you need?
                          </label>
                          <p className="text-xs text-gray-500 mb-3">Select all that apply</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {featureOptions.map((option) => (
                              <div key={option.id} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={`feature-${option.id}`}
                                  checked={formData.features.includes(option.id)}
                                  onChange={() => handleFeatureToggle(option.id)}
                                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor={`feature-${option.id}`} className="ml-2 text-gray-700">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="otherFeatures" className="block text-sm font-medium text-gray-700 mb-1">
                            Other features or functionality
                          </label>
                          <textarea
                            id="otherFeatures"
                            name="otherFeatures"
                            value={formData.otherFeatures}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="Please describe any other features you need that weren't listed above..."
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 5: Design Preferences */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <div className="flex items-start p-4 border border-gray-300 rounded-lg">
                          <input
                            type="checkbox"
                            id="existingBrand"
                            name="existingBrand"
                            checked={formData.existingBrand}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <div className="ml-3">
                            <label htmlFor="existingBrand" className="text-sm font-medium text-gray-700">
                              I have existing brand assets (logo, colors, etc.)
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                              Check this if you already have branding elements we should use
                            </p>
                          </div>
                        </div>

                        {formData.existingBrand && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Which brand assets do you have?
                            </label>
                            <p className="text-xs text-gray-500 mb-3">Select all that apply</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {brandAssetOptions.map((option) => (
                                <div key={option.id} className="flex items-center">
                                  <input
                                    type="checkbox"
                                    id={`asset-${option.id}`}
                                    checked={formData.brandAssets.includes(option.id)}
                                    onChange={() => handleBrandAssetToggle(option.id)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                  />
                                  <label htmlFor={`asset-${option.id}`} className="ml-2 text-gray-700">
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <label htmlFor="colorPreference" className="block text-sm font-medium text-gray-700 mb-1">
                            Color Preferences
                          </label>
                          <input
                            type="text"
                            id="colorPreference"
                            name="colorPreference"
                            value={formData.colorPreference}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="e.g., Blue and white, earthy tones, vibrant colors..."
                          />
                          <p className="mt-1 text-xs text-gray-500">Describe any color preferences for your website</p>
                        </div>

                        <div>
                          <label htmlFor="stylePreference" className="block text-sm font-medium text-gray-700 mb-1">
                            Design Style Preference
                          </label>
                          <select
                            id="stylePreference"
                            name="stylePreference"
                            value={formData.stylePreference}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          >
                            <option value="minimal">Minimal & Clean</option>
                            <option value="bold">Bold & Modern</option>
                            <option value="corporate">Professional & Corporate</option>
                            <option value="creative">Creative & Artistic</option>
                            <option value="luxury">Elegant & Luxury</option>
                          </select>
                          <p className="mt-1 text-xs text-gray-500">
                            This helps us understand your aesthetic preferences
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Step 6: Additional Information */}
                    {currentStep === 5 && (
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="competitors" className="block text-sm font-medium text-gray-700 mb-1">
                            Competitor Websites
                          </label>
                          <textarea
                            id="competitors"
                            name="competitors"
                            value={formData.competitors}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="List any competitor websites or websites you like the design/functionality of..."
                          />
                          <p className="mt-1 text-xs text-gray-500">
                            This helps us understand your market and preferences
                          </p>
                        </div>

                        <div>
                          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Information
                          </label>
                          <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="Any other details or requirements you'd like to share..."
                          />
                        </div>

                        <div className="flex items-start p-4 border border-gray-300 rounded-lg">
                          <input
                            type="checkbox"
                            id="termsAccepted"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleCheckboxChange}
                            className={`h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                              errors.termsAccepted ? "border-red-500" : ""
                            }`}
                          />
                          <div className="ml-3">
                            <label htmlFor="termsAccepted" className="text-sm font-medium text-gray-700">
                              I agree to the terms and conditions*
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                              By submitting this form, you agree to be contacted about your project
                            </p>
                            {errors.termsAccepted && (
                              <p className="mt-1 text-sm text-red-600">{errors.termsAccepted}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}

            <div className="flex justify-between mt-8 pt-6 border-t">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </button>
              )}

              {!isLastStep ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Next Step
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}