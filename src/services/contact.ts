export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResult {
  ok: boolean;
  message: string;
}

/**
 * Sends a contact message to whatever endpoint is configured via VITE_CONTACT_ENDPOINT.
 * If no endpoint is configured (e.g. local dev), we resolve successfully without sending —
 * this lets the form be testable without external dependencies.
 *
 * Swap this for Resend, Formspree, or your own API by setting VITE_CONTACT_ENDPOINT.
 */
export const sendContactMessage = async (payload: ContactPayload): Promise<ContactResult> => {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  if (!endpoint) {
    return {
      ok: true,
      message: 'Message captured locally (no contact endpoint configured).',
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { ok: false, message: `Request failed (${response.status}).` };
    }

    return { ok: true, message: 'Thanks — your message is on its way.' };
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'Unknown error';
    return { ok: false, message: `Couldn't send message: ${reason}` };
  }
};
