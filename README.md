[github-repository-url]: https://github.com/mgthomas99/valid-mimetype
[npm-package-url]: http://npmjs.com/package/valid-mimetype
[npm-package-version-shield-url]: https://img.shields.io/npm/v/valid-mimetype.svg
[repository-license-shield-url]: https://img.shields.io/github/license/mgthomas99/valid-mimetype.svg?style=flat-square
[repository-license-url]: https://github.com/mgthomas99/valid-mimetype/blob/master/LICENSE

# valid-mimetype

[![npm][npm-package-version-shield-url]][npm-package-url]
[![GitHub repository license][repository-license-shield-url]][repository-license-url]

Validate mimetype strings. This module is for determining whether a string
follows the mimetype string format found in
[IETF RFC 6838](https://tools.ietf.org/html/rfc6838#section-4.2).

```ts
import * as vmt from "validate-mimetype";
vmt.isValidMimeType("application/html+xml");        // ⇒ true
vmt.isValidMimeType("application/x-7z-compressed"); // ⇒ true
vmt.isValidMimeType("audio/3gpp2");                 // ⇒ true
```

## Build & Test

```sh
npm run build
npm test
```

## License

See the `LICENSE` file for license information.
