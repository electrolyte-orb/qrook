import { Database } from '@/types/db';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
export const supabase = createBrowserSupabaseClient<Database>();
