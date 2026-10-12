import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://byfiwwdfzxkwdwzqtaro.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_yephu68oAyBDAXjQ5JlHZQ_fVR5c0Bb";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
