import { useState } from 'react';
import { ContactFormData, WebinyApiResponse, submitContactForm } from '../services/webiny-api';

interface UseContactFormReturn {
  isSubmitting: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  submitForm: (formData: ContactFormData) => Promise<void>;
  resetFormState: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const result: WebinyApiResponse = await submitContactForm(formData);

      if (result.error) {
        setErrorMessage(result.error);
      } else {
        setSuccessMessage('Thank you! Your message has been sent successfully.');
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFormState = () => {
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  return {
    isSubmitting,
    successMessage,
    errorMessage,
    submitForm,
    resetFormState
  };
};