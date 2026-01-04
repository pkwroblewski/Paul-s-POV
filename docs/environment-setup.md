# Environment Setup

Create a `.env.local` file in the project root with the following variables:

```bash
# =============================================================================
# PAUL'S POV - Environment Variables
# =============================================================================

# -----------------------------------------------------------------------------
# App Configuration
# -----------------------------------------------------------------------------
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# -----------------------------------------------------------------------------
# Supabase (Database & Auth)
# -----------------------------------------------------------------------------
# Get these from: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# -----------------------------------------------------------------------------
# Email (Resend - for newsletter)
# -----------------------------------------------------------------------------
# Get this from: https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key

# -----------------------------------------------------------------------------
# Analytics (Optional)
# -----------------------------------------------------------------------------
# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=paulspov.com
```

## Getting Your Keys

### Supabase
1. Go to [supabase.com](https://supabase.com) and create a project
2. Navigate to Project Settings > API
3. Copy the Project URL and anon/public key
4. Copy the service_role key (keep this secret!)

### Resend (Email)
1. Go to [resend.com](https://resend.com) and create an account
2. Navigate to API Keys
3. Create a new API key and copy it

