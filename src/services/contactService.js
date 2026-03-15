/**
 * Service to handle the contact form submission logic.
 * This separates the API request logic from the UI components.
 */

// We use FormSubmit.co as the backend logic based on the existing code.
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/mribeiro17.info@gmail.com';

export const submitContactForm = async (formData) => {
    try {
        const response = await fetch(FORMSUBMIT_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return { success: false, error: error.message };
    }
};
