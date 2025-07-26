/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getCourseData(locale: 'en' | 'bn' = 'bn') {
  try {
    const response = await axios.get(
      'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course',
      {
        params: { lang: 'en' },
        headers: {
          'X-TENMS-SOURCE-PLATFORM': 'web',
        },
      }
    );

    // Only log data, not entire response object (which has circular references)
    console.log('✅ IELTS Course Data:', response.data);

    return response.data;
  } catch (error: any) {
    console.error(
      '❌ IELTS API Error:',
      error?.response?.data || error?.message || error
    );
    return null;
  }
}