import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://stzcpdbvfntiuivnbucv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0emNwZGJ2Zm50aXVpdm5idWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3ODQzNjgsImV4cCI6MjAzODM2MDM2OH0.fSVy-CGFQItltW9-sWW1w69ieWmOPh-g0C8CnGEn1v8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
