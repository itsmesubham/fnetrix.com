# Webiny API Integration

This project includes integration with Webiny CMS for handling form submissions. Follow these steps to configure the integration:

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_WEBINY_GRAPHQL_URL=https://your-webiny-app.cloudfront.net/cms/manage/en-US
REACT_APP_WEBINY_API_KEY=your-webiny-api-key-here
```

To get your Webiny API key:
1. Log in to your Webiny admin panel
2. Navigate to Settings > API Keys
3. Create a new API key with permissions to create and publish content
4. Copy the key and add it to your `.env` file

## Form Submission Process

The contact form uses a two-step process:
1. Creates a new contact submission entry in Webiny
2. Publishes the entry so it becomes visible

The form data is mapped as follows:
- Full name → `fullName`
- Email → `email`
- Company → `company`
- Need help with → `helpWith`
- Timeline → `timeline`
- Project note → `projectNote`

## Customizing the Schema

If you need to customize the contact form schema in Webiny:
1. Go to your Webiny admin panel
2. Navigate to Content Model Editor
3. Create or modify the "ContactSubmission" model
4. Update the GraphQL mutations in `src/services/webiny-api.ts` accordingly

## Error Handling

The form includes error handling for:
- Network errors
- API authentication failures
- Validation errors from Webiny
- Server-side errors

Error messages will be displayed to the user in the form.

## Testing

To test the integration locally:
1. Ensure your `.env` file is properly configured
2. Run the application with `npm start`
3. Fill out the contact form and submit
4. Check your Webiny admin panel to confirm the submission was received