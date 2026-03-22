/**
 * Contact form service — EmailJS integration.
 *
 * Sends two emails per submission:
 *   1. Admin notification (to mribeiro17.info@gmail.com)
 *   2. Auto-reply confirmation (to the client)
 */
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_k3p67wq';
const EMAILJS_ADMIN_TEMPLATE = 'template_0d1733t';
const EMAILJS_REPLY_TEMPLATE = 'template_yw4psi3';
const EMAILJS_PUBLIC_KEY = 'kfO7H6go0E3oXRJp4';

/**
 * @param {Object} params — { from_name, user_email, service, message }
 */
export const submitContactForm = async (params) => {
    try {
        // 1. Send admin notification
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_ADMIN_TEMPLATE,
            params,
            EMAILJS_PUBLIC_KEY
        );

        // 2. Send auto-reply to client
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_REPLY_TEMPLATE,
            params,
            EMAILJS_PUBLIC_KEY
        );

        return { success: true };
    } catch (error) {
        console.error('EmailJS error:', error);
        return { success: false, error: error?.text || error.message };
    }
};
