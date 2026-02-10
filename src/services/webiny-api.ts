// Define types for our form data
export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  helpWith: string;
  timeline: string;
  projectNote: string;
}

// Define type for API response
export interface WebinyApiResponse {
  data?: any;
  error?: string;
}

/**
 * Submits contact form data to Webiny API
 */
export const submitContactForm = async (formData: ContactFormData): Promise<WebinyApiResponse> => {
  try {
    const GRAPHQL_URL = process.env.REACT_APP_WEBINY_GRAPHQL_URL || "https://d37rx9x7ljwr4b.cloudfront.net/cms/manage/en-US";
    const API_KEY = process.env.REACT_APP_WEBINY_API_KEY || "a62c232b88a34bc7ceed9717ba9245773aaf4aeaeadd807e";

    // Create the contact form submission
    const createRes = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        query: `
          mutation {
            createDemo(
              data: {
                name: "${formData.fullName}",
                email: "${formData.email}",
                company: "${formData.company}",
                needHelpWith: "${formData.helpWith}",
                timeline: "${formData.timeline}",
                projectNote: "${formData.projectNote}"
              }
            ) {
              data { id }
            }
          }
        `
      })
    });

    const result = await createRes.json();
    
    if (result.errors) {
      throw new Error(result.errors[0]?.message || 'Failed to create demo');
    }

    const revisionId = result.data.createDemo.data.id;

    // Publish immediately
    const publishRes = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        query: `
          mutation {
            publishDemo(revision: "${revisionId}") {
              data { id }
            }
          }
        `
      })
    });

    const publishResult = await publishRes.json();
    
    if (publishResult.errors) {
      throw new Error(publishResult.errors[0]?.message || 'Failed to publish demo');
    }

    return { data: { id: publishResult.data.publishDemo.data.id } };
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return { 
      error: error.message || 'Failed to submit form' 
    };
  }
};

/**
 * Alternative function for submitting form data similar to the example you provided
 * This follows the pattern of creating and then publishing an entry
 */
export const submitContactFormWithPublish = async (formData: ContactFormData): Promise<WebinyApiResponse> => {
  try {
    const GRAPHQL_URL = process.env.REACT_APP_WEBINY_GRAPHQL_URL || "https://d37rx9x7ljwr4b.cloudfront.net/cms/manage/en-US";
    const API_KEY = process.env.REACT_APP_WEBINY_API_KEY || "a62c232b88a34bc7ceed9717ba9245773aaf4aeaeadd807e";

    // Create the contact form submission
    const createRes = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        query: `
          mutation {
            createDemo(
              data: {
                name: "${formData.fullName}",
                email: "${formData.email}",
                company: "${formData.company}",
                needHelpWith: "${formData.helpWith}",
                timeline: "${formData.timeline}",
                projectNote: "${formData.projectNote}"
              }
            ) {
              data { id }
            }
          }
        `
      })
    });

    const result = await createRes.json();
    
    if (result.errors) {
      throw new Error(result.errors[0]?.message || 'Failed to create demo');
    }

    const revisionId = result.data.createDemo.data.id;

    // Publish immediately
    const publishRes = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        query: `
          mutation {
            publishDemo(revision: "${revisionId}") {
              data { id }
            }
          }
        `
      })
    });

    const publishResult = await publishRes.json();
    
    if (publishResult.errors) {
      throw new Error(publishResult.errors[0]?.message || 'Failed to publish demo');
    }

    return { data: { id: publishResult.data.publishDemo.data.id } };
  } catch (error: any) {
    console.error('Error submitting contact form with publish:', error);
    return { 
      error: error.message || 'Failed to submit form' 
    };
  }
};