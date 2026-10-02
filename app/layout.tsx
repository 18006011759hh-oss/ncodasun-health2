import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "营康大昌医疗科技｜个体化营养补充剂整体解决方案",
  description: "营康大昌医疗科技围绕个体化营养补充剂，提供专业营养方案、PIFAS建设咨询、组份制剂和智能配置系统服务。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
