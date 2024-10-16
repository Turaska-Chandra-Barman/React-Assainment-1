import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export const cn = (...input) => twMerge(clsx(...input));