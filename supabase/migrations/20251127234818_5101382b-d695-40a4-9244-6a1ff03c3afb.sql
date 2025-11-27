-- Fix critical security issue: Restrict SELECT access to leads table
-- Currently the policy "Service role can view all leads" uses USING (true)
-- which allows anyone to read all customer data

-- Drop the insecure SELECT policy
DROP POLICY IF EXISTS "Service role can view all leads" ON public.leads;

-- Create a new policy that restricts SELECT to service role only
CREATE POLICY "Only service role can view leads"
ON public.leads
FOR SELECT
TO service_role
USING (true);

-- Add database-level validation constraints for input length limits
-- This prevents malicious users from bypassing client-side validation

ALTER TABLE public.leads 
ADD CONSTRAINT name_length_check CHECK (length(name) > 0 AND length(name) <= 100);

ALTER TABLE public.leads 
ADD CONSTRAINT phone_length_check CHECK (length(phone) > 0 AND length(phone) <= 20);

ALTER TABLE public.leads 
ADD CONSTRAINT email_length_check CHECK (length(email) > 0 AND length(email) <= 255);