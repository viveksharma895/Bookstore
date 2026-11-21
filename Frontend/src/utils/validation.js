// Remove leading spaces and collapse repeated spaces into a single space
export const normalizeSpaces = (value = "") =>
  value.replace(/^\s+/, "").replace(/\s{2,}/g, " ");

// Validation rules used by react-hook-form (safety net if a value bypasses
// the input normalization)
export const spaceRules = {
  noLeadingSpace: (value) =>
    !/^\s/.test(value ?? "") || "Cannot start with a space",
  noDoubleSpace: (value) =>
    !/\s{2}/.test(value ?? "") || "Use only one space between words",
};

// Rewrite the visible input value, then hand it back to react-hook-form
export const createNormalizedChangeHandler = (field) => (event) => {
  const normalized = normalizeSpaces(event.target.value);
  if (normalized !== event.target.value) {
    event.target.value = normalized;
  }
  field.onChange(event);
};
