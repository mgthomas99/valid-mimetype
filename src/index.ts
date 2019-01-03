
export type MimeType = string;

/**
 * A regular expression that matches mimetype strings.
 */
export const MIMETYPE_REGEX =
    /^[a-zA-Z]+\/[a-zA-Z0-9]+((\.|\+|\-)[a-zA-Z0-9]+)*$/;

/**
 * @param   {any} x
 *          The argument to test.
 * @return  `true` if the argument is a `string` that matches the mimetype
 *          regex, `false` otherwise.
 */
export function isValidMimeType(x: any) : x is MimeType {
  if (typeof x !== "string") return false;
  return MIMETYPE_REGEX.test(x);
}
