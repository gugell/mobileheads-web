import { defaultLang, languages } from "../i18n/ui";

export function getCurrentLang(pathname: string, languages: Record<string, string>, defaultLang: string): string {
  const pathSegments = pathname.split('/').filter(Boolean);
  return pathSegments[0] in languages ? pathSegments[0] : defaultLang;
}

export function getPathWithoutLang(pathname: string): string {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  return firstSegment in languages ? pathSegments.slice(1).join('/') : pathSegments.join('/');
}

export function createLocalizedPath(lang: string, path: string): string {
  if (lang === defaultLang) {
    return `/${path}`;
  }
  return `/${lang}${path ? `/${path}` : ''}`;
}