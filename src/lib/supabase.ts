import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://exylsuhsmfupnpilqwdu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4eWxzdWhzbWZ1cG5waWxxd2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1MTI0ODEsImV4cCI6MjA1NzA4ODQ4MX0.8vK2U3ZWBesmIEyI6-YTRSI7wQmOb-yw-JwdUP58nCU'
);

export function isSupabaseConfigured(): boolean {
  return true; 
}
