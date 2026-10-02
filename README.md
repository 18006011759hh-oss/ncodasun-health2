# 营康大昌医疗科技官网

营康大昌医疗科技围绕个体化营养补充剂，提供专业营养方案、PIFAS 建设咨询、组份制剂和智能配置系统服务。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- 原生 CSS

## 本地运行

环境要求：Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 查看网站。

## 生产构建

```bash
npm run build
npm run start
```

## 部署到 Vercel

1. 将本项目上传至 GitHub。
2. 在 Vercel 中选择 **Add New → Project**，导入对应仓库。
3. Framework Preset 选择 **Next.js**。
4. Build Command 使用 `npm run build`。
5. Output Directory 使用 `.next`，或保留 Vercel 的 Next.js 默认设置。
6. 点击 Deploy。

项目根目录已包含 `vercel.json`，Vercel 会自动按 Next.js 项目构建。

## 主要目录

- `app/`：网站页面、布局和样式
- `public/`：Logo、医疗场景图片和图标资源
- `tests/`：原项目页面渲染测试
- `vercel.json`：Vercel 部署配置
- `next.config.ts`：Next.js 配置

## 待补充信息

网站中的公司地址、联系电话、公众号二维码、备案信息和部分案例成果仍以“待补充”标记展示，上线前请替换为企业确认后的正式资料。
