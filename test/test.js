import assert from "assert";
import supertest from "supertest";
import app from "../index.js";

describe("Get /", function () {
    it("Should return a json with 200 status code", function (done) {
        supertest(app)
            .get("/")
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
});
