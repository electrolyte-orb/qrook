import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/db';

export const createClient = () =>
	createServerComponentSupabaseClient<Database>({
		headers,
		cookies,
	});
