import { describe, it, expect } from 'vitest';
import { createPageUrl } from './index';

describe('createPageUrl', () => {
  it('ajoute un slash au début', () => {
    expect(createPageUrl('dashboard')).toBe('/dashboard');
  });

  it('remplace les espaces par des tirets', () => {
    expect(createPageUrl('mon budget')).toBe('/mon-budget');
  });

  it('remplace plusieurs espaces', () => {
    expect(createPageUrl('page de test avec espaces')).toBe('/page-de-test-avec-espaces');
  });

  it('ne change rien si pas d\'espace', () => {
    expect(createPageUrl('transactions')).toBe('/transactions');
  });
});
