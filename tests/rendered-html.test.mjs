import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the营康大昌首页", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>营康大昌医疗科技/);
  assert.match(html, /个体化营养补充剂整体解决方案/);
  assert.match(html, /PIFAS建设咨询/);
  assert.match(html, /智能配置设备/);
  assert.match(html, /厦门市第五医院/);
  assert.doesNotMatch(html, /Codex is working|Your site is taking shape/);
});

test("includes core interactive controls", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /探索解决方案/);
  assert.match(html, /私域个体化营养方案/);
  assert.match(html, /咨询项目合作/);
  assert.match(html, /返回顶部/);
});
