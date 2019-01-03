import * as chai from "chai";
import { isValidMimeType } from "./../src/index";

describe("Mime", function () {
  describe("isValidMimeType", function () {
    it("should determine the arguments to be valid mime types",
    function () {
      ([
        "application/javascript",
        "application/html+xml",
        "application/vnd.oasis.opendocument.text",
        "application/vnd.ms-powerpoint",
        "application/x-7z-compressed",
        "application/x-shockwave-flash",
        "application/x-sh",
        "video/3gpp2"
      ])
        .map((x) => isValidMimeType(x))
        .forEach((x) => chai.expect(x).to.be.true);
    });

    it("should determine the arguments to be invalid mime types",
    function () {
      ([
        "application//javascript",
        "application",
        "application /vnd.oasis.opendocument.text",
        "application/a.b.c++"
      ])
        .map((x) => isValidMimeType(x))
        .forEach((x) => chai.expect(x).to.be.false);
    });
  });
});
