"use client";
/* eslint-disable @next/next/no-img-element -- Vinext image optimization is unavailable in this runtime. */

import { FormEvent, TouchEvent, useEffect, useRef, useState } from "react";

type IconName = "hospital" | "spark" | "box" | "support" | "system" | "software" | "cloud" | "plan" | "check" | "close" | "menu" | "up";

const Icon = ({ name, size = 22 }: { name: IconName; size?: number }) => {
  const paths: Record<IconName, React.ReactNode> = {
    hospital: <><path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16"/><path d="M9 21v-4h4v4M9 7h4M11 5v4M3 21h18"/></>,
    spark: <><path d="M12 3 9.8 8.8 4 11l5.8 2.2L12 19l2.2-5.8L20 11l-5.8-2.2L12 3Z"/><path d="m5 3 .7 1.8L7.5 5.5l-1.8.7L5 8l-.7-1.8-1.8-.7 1.8-.7L5 3Z"/></>,
    box: <><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z"/><path d="M12 11v10"/></>,
    support: <><path d="M4 13a8 8 0 0 1 16 0"/><path d="M4 13v5h3v-5H4Zm13 0v5h3v-5h-3ZM17 20c-1.4 1-3.1 1-5 1"/></>,
    system: <><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4M7 9h4v4H7zM14 9h3M14 12h3"/></>,
    software: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h3M8 16h8M14 12h2"/></>,
    cloud: <><path d="M6.5 18a4.5 4.5 0 0 1-.4-9A6 6 0 0 1 17.6 8a5 5 0 0 1 .4 10H6.5Z"/><path d="m9 14 3-3 3 3M12 11v7"/></>,
    plan: <><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    close: <><path d="M6 6l12 12M18 6 6 18"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    up: <><path d="m6 14 6-6 6 6"/><path d="M12 8v12"/></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
};

const heroSlides = [
  {
    image: "/hero-consultation.jpg",
    eyebrow: "服务医疗机构 · 健康服务机构 · 企业客户",
    title: <>个体化营养补充剂<br />整体解决方案</>,
    text: "融合专业营养方案、组份制剂、智能配置设备与数字化管理系统，为医疗机构及健康服务场景提供可落地的一体化服务。",
  },
  {
    image: "/hero-preparation.jpg",
    eyebrow: "PIFAS 智能配置系统",
    title: <>从营养方案<br />到精准配置与管理</>,
    text: "以智能设备、配置软件、标准流程与供应链管理协同连接方案设计、精准配制和持续服务。",
  },
  {
    image: "/hero-products.jpg",
    eyebrow: "组份制剂 · 智配云链",
    title: <>专业配置能力<br />支撑多元服务场景</>,
    text: "围绕不同个体的营养需求，提供科学灵活的组份设计、配置支持及云端供应协同。",
  },
];

const businesses = [
  {
    icon: "spark" as IconName,
    num: "01",
    title: "私域个体化营养方案",
    value: "把专业营养评估、方案与持续服务带入私域健康管理场景。",
    abilities: ["营养评估", "方案与产品组合", "持续服务支持"],
    clients: "私域健康管理、健康服务机构、企业客户",
    detail: "面向私域健康管理、健康服务机构和企业客户，根据不同人群需求，提供营养评估、个体化方案设计、产品组合及持续服务支持。",
  },
  {
    icon: "hospital" as IconName,
    num: "02",
    title: "PIFAS建设咨询",
    value: "从项目调研到运营落地，建立完整、可执行的建设路径。",
    abilities: ["空间与流程规划", "软硬件配置", "运营落地咨询"],
    clients: "医院、专业健康机构",
    detail: "面向医院及专业健康机构，提供PIFAS项目从前期调研、空间与流程规划、软硬件配置到运营落地的全过程咨询服务。",
  },
  {
    icon: "box" as IconName,
    num: "03",
    title: "个体化营养组份制剂",
    value: "围绕个体营养需求，提供科学、灵活、精准的组份配置支持。",
    abilities: ["营养组份设计", "精准配置支持", "专业交付管理"],
    clients: "医疗机构、健康服务机构、专业渠道",
    detail: "围绕不同个体的营养需求，提供科学、灵活的营养组份设计与制剂配置支持，突出精准配置和专业交付能力。",
  },
  {
    icon: "cloud" as IconName,
    num: "04",
    title: "PIFAS智配－云链方案",
    value: "以设备、软件和云端供应链协同，让配置业务一体化运行。",
    abilities: ["方案与组份管理", "智能精准配制", "供应链协同"],
    clients: "PIFAS项目方、医疗及健康服务机构",
    detail: "通过智能配置设备、管理软件和云端供应链，实现方案录入、组份选择、精准配制、数据管理和供应协同的一体化运行。",
  },
];

const pifasParts = [
  { icon: "system" as IconName, num: "01", title: "智能配置设备", text: "承接组份选择与精准配制环节。" },
  { icon: "software" as IconName, num: "02", title: "数字化管理软件", text: "支持方案、配置与过程信息管理。" },
  { icon: "plan" as IconName, num: "03", title: "个体化营养方案", text: "连接需求评估与组份设计。" },
  { icon: "cloud" as IconName, num: "04", title: "云端供应链协同", text: "协同产品、组份与持续运营支持。" },
];

const pifasFlow = ["需求评估", "个体化方案生成", "营养组份选择", "智能精准配制", "数据与供应链管理", "持续跟踪优化"];

const buildSteps = [
  ["01", "项目调研与需求分析", "厘清业务定位、服务对象与建设边界。"],
  ["02", "建设方案与空间规划", "规划功能分区、业务动线和实施路径。"],
  ["03", "设备及软件系统配置", "结合项目需求完成软硬件方案配置。"],
  ["04", "产品和组份体系导入", "建立匹配业务场景的组份与产品体系。"],
  ["05", "人员培训与试运行", "完成岗位培训、流程验证与试运行支持。"],
  ["06", "运营支持与持续优化", "围绕实际运行持续协同并优化服务。"],
];

const scenarios = [
  { title: "医院营养科", text: "承接院内个体化营养服务与配置场景。", image: "/case-nutrition-center.jpg" },
  { title: "健康管理中心", text: "支持评估、方案、产品组合与跟踪服务。", image: "/hero-consultation.jpg" },
  { title: "专业医疗机构", text: "构建专业、规范的营养服务交付能力。", image: "/hero-preparation.jpg" },
  { title: "其他个体化营养场景", text: "面向私域与企业健康服务灵活落地。", image: "/hero-products.jpg" },
];

const capabilities = [
  "个体化营养方案能力",
  "PIFAS项目建设能力",
  "组份制剂配置能力",
  "智能设备与软件协同能力",
  "云端供应链与运营支持能力",
];

const navItems = [["business", "核心业务"], ["pifas", "PIFAS系统"], ["consulting", "建设咨询"], ["cases", "项目案例"], ["capabilities", "专业能力"]];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeBusiness, setActiveBusiness] = useState<number | null>(null);
  const [consultOpen, setConsultOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const touchStart = useRef(0);
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActiveSlide((value) => (value + 1) % heroSlides.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const ids = ["home", ...navItems.map(([id]) => id)];
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-35% 0px -55%", threshold: [0, .2, .5] });
    ids.forEach((id) => { const node = document.getElementById(id); if (node) sectionObserver.observe(node); });

    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: .1 });
    document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
    const onScroll = () => setShowTop(window.scrollY > 720);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { sectionObserver.disconnect(); revealObserver.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    const isModalOpen = activeBusiness !== null || consultOpen;
    document.body.classList.toggle("modal-open", isModalOpen);
    if (isModalOpen) window.setTimeout(() => modalCloseRef.current?.focus(), 20);
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setActiveBusiness(null); setConsultOpen(false); } };
    window.addEventListener("keydown", close);
    return () => { document.body.classList.remove("modal-open"); window.removeEventListener("keydown", close); };
  }, [activeBusiness, consultOpen]);

  const changeSlide = (direction: number) => setActiveSlide((activeSlide + direction + heroSlides.length) % heroSlides.length);
  const onTouchEnd = (event: TouchEvent) => {
    const distance = touchStart.current - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 45) changeSlide(distance > 0 ? 1 : -1);
  };
  const openConsult = () => { setActiveBusiness(null); setFormSent(false); setConsultOpen(true); };
  const submitForm = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setFormSent(true); };

  return (
    <main id="top">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="营康大昌医疗科技首页"><img src="/logo.png" alt="营康大昌医疗科技" /></a>
        <nav className={menuOpen ? "is-open" : ""} aria-label="主要导航">
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <button className="nav-consult" onClick={openConsult}>项目咨询</button>
        <button className="menu-button" aria-label={menuOpen ? "关闭菜单" : "打开菜单"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button>
      </header>

      <section className="hero" id="home" aria-roledescription="轮播" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; setPaused(true); }} onTouchEnd={(event) => { onTouchEnd(event); setPaused(false); }}>
        {heroSlides.map((slide, index) => <div key={slide.image} className={`hero-slide ${index === activeSlide ? "active" : ""}`} aria-hidden={index !== activeSlide}>
          <img src={slide.image} alt="" fetchPriority={index === 0 ? "high" : "auto"} />
          <div className="hero-overlay" />
          <div className="hero-copy">
            <p className="hero-eyebrow">{slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <span>{slide.text}</span>
            <div className="hero-tags" aria-label="核心业务标签"><b>个体化方案</b><b>PIFAS建设</b><b>组份制剂</b><b>智配云链</b></div>
            <div className="hero-actions"><a className="button glass-primary" href="#business">探索解决方案</a><button className="button glass-secondary" onClick={openConsult}>咨询项目合作</button></div>
          </div>
        </div>)}
        <button className="slider-arrow prev" aria-label="上一张" onClick={() => changeSlide(-1)}>‹</button>
        <button className="slider-arrow next" aria-label="下一张" onClick={() => changeSlide(1)}>›</button>
        <div className="slider-dots" aria-label="选择轮播页">{heroSlides.map((_, index) => <button key={index} aria-label={`第 ${index + 1} 张`} aria-current={index === activeSlide} className={index === activeSlide ? "active" : ""} onClick={() => setActiveSlide(index)}><i /></button>)}</div>
      </section>

      <section className="business section" id="business">
        <div className="section-heading reveal"><div><p className="eyebrow">CORE BUSINESS</p><h2>四大核心业务</h2></div><p>围绕个体化营养补充剂，把专业方案、项目建设、组份制剂与智能系统连接为完整服务。</p></div>
        <div className="business-grid reveal">
          {businesses.map((business, index) => <article className="business-entry" key={business.title}>
            <div className="business-top"><span className="business-number">{business.num}</span><span className="business-icon"><Icon name={business.icon} size={24} /></span></div>
            <h3>{business.title}</h3><p className="business-value">{business.value}</p>
            <ul>{business.abilities.map((ability) => <li key={ability}><Icon name="check" size={15} />{ability}</li>)}</ul>
            <div className="business-client"><span>适用客户</span><p>{business.clients}</p></div>
            <button className="detail-button" onClick={() => setActiveBusiness(index)}>查看详情</button>
          </article>)}
        </div>
      </section>

      <section className="pifas" id="pifas">
        <div className="pifas-visual reveal">
          <img src="/solution-center.jpg" alt="个体化营养配置专业场景示意" loading="lazy" />
          <span>专业服务场景示意</span>
          <div className="system-badge"><small>PIFAS</small><strong>智能配置系统</strong></div>
        </div>
        <div className="pifas-content reveal">
          <p className="eyebrow">PIFAS SYSTEM</p><h2>让方案、配置与运营<br />形成完整系统</h2>
          <p className="pifas-definition">集智能设备、配置软件、标准流程与供应链管理于一体的个体化营养补充剂智能配置系统。</p>
          <div className="pifas-parts">{pifasParts.map((part) => <div key={part.title}><span><Icon name={part.icon} size={21} /></span><small>{part.num}</small><strong>{part.title}</strong><p>{part.text}</p></div>)}</div>
        </div>
        <div className="pifas-flow reveal" aria-label="PIFAS核心流程">
          <div><p className="eyebrow">CORE FLOW</p><h3>PIFAS 核心运行流程</h3></div>
          <ol>{pifasFlow.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span></li>)}</ol>
        </div>
      </section>

      <section className="consulting section" id="consulting">
        <div className="consulting-head reveal"><div><p className="eyebrow">PIFAS CONSULTING</p><h2>从前期规划到运营优化<br />提供全过程建设咨询</h2></div><div className="consulting-note"><span>适用场景</span><p>医院营养科、健康管理中心、专业医疗机构及其他个体化营养服务场景。</p></div></div>
        <div className="build-timeline reveal">{buildSteps.map(([num, title, text]) => <article key={num}><b>{num}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        <div className="delivery-strip reveal"><div><strong>全过程交付逻辑</strong><span>调研 · 规划 · 配置 · 导入 · 培训 · 运营</span></div><button className="detail-button light" onClick={() => setActiveBusiness(1)}>查看建设咨询详情</button></div>
      </section>

      <section className="scenarios section" id="scenarios">
        <div className="section-heading reveal"><div><p className="eyebrow">APPLICATION SCENARIOS</p><h2>面向多元专业场景落地</h2></div><p>同一套专业能力，根据机构定位、服务对象与运营模式形成适配方案。</p></div>
        <div className="scenario-grid reveal">{scenarios.map((scenario, index) => <article key={scenario.title}><img src={scenario.image} alt="" loading="lazy" /><div><small>0{index + 1}</small><h3>{scenario.title}</h3><p>{scenario.text}</p></div></article>)}</div>
      </section>

      <section className="cases section" id="cases">
        <div className="section-heading reveal"><div><p className="eyebrow">PROJECT CASES</p><h2>项目案例与服务实践</h2></div><p>真实资料不足的部分明确标记待补充，不以虚构数据替代项目成果。</p></div>
        <div className="case-grid reveal">
          <article className="case-card featured"><div className="case-image"><img src="/case-nutrition-center.jpg" alt="医院营养配置中心场景示意" loading="lazy" /><span>医院项目 · 场景示意</span></div><div className="case-content"><div className="case-title"><small>已落地项目</small><h3>厦门市第五医院</h3><p>个体化营养配置室项目</p></div><dl><div><dt>项目背景</dt><dd>围绕院内个体化营养服务建设专业配置载体。</dd></div><div><dt>客户需求</dt><dd>建立规范的配置空间、服务流程与运行支持。</dd></div><div><dt>解决方案</dt><dd>PIFAS建设咨询与个体化营养配置服务。</dd></div><div><dt>实施内容</dt><dd>空间与流程规划、配置体系导入、运营协同。</dd></div><div><dt>项目成果</dt><dd><em>具体成果与运营数据待补充</em></dd></div></dl></div></article>
          <article className="case-card pending"><div className="case-image"><img src="/hero-consultation.jpg" alt="私域营养健康服务场景示意" loading="lazy" /><span>私域服务 · 场景示意</span></div><div className="case-content"><div className="case-title"><small>案例资料待补充</small><h3>私域个体化营养服务</h3><p>健康服务机构合作方向</p></div><dl><div><dt>项目背景</dt><dd>待补充</dd></div><div><dt>客户需求</dt><dd>待补充</dd></div><div><dt>解决方案</dt><dd>营养评估、个体化方案、产品组合与持续服务。</dd></div><div><dt>实施内容</dt><dd>待补充</dd></div><div><dt>项目成果</dt><dd><em>待补充</em></dd></div></dl></div></article>
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="capability-copy reveal"><p className="eyebrow">PROFESSIONAL CAPABILITIES</p><h2>以系统协同与专业交付<br />区别于普通产品供应</h2><p>营康大昌围绕方案、建设、制剂、设备软件与供应链形成协同能力，服务项目从规划走向稳定运行。</p><button className="button solid" onClick={openConsult}>获取项目沟通</button></div>
        <ol className="capability-list reveal">{capabilities.map((capability, index) => <li key={capability}><b>{String(index + 1).padStart(2, "0")}</b><span>{capability}</span><Icon name="check" size={18} /></li>)}</ol>
      </section>

      <section className="contact section reveal" id="contact"><div><p className="eyebrow">PROJECT COOPERATION</p><h2>让个体化营养服务<br />真正落地运行</h2><span>告诉我们您的机构类型与项目阶段，获取针对性的业务沟通与资料支持。</span></div><button className="button solid large" onClick={openConsult}>咨询项目合作</button></section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand"><span className="footer-logo"><img src="/logo.png" alt="营康大昌医疗科技" /></span><p>围绕个体化营养补充剂，提供专业营养方案、PIFAS建设咨询、组份制剂和智能配置系统服务。</p></div>
          <div className="footer-column"><h3>核心业务</h3>{businesses.map((business) => <a href="#business" key={business.title}>{business.title}</a>)}</div>
          <div className="footer-column"><h3>快速导航</h3>{navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}<a href="#contact">咨询联系</a></div>
          <div className="footer-column footer-contact"><h3>联系我们</h3><p><span>公司地址</span>待补充</p><p><span>联系电话</span>待补充</p><p><span>电子邮箱</span><a href="mailto:contact@ncodasun.com">contact@ncodasun.com</a></p></div>
          <div className="footer-qr"><div aria-label="公众号二维码占位"><span>QR</span></div><strong>官方公众号</strong><small>二维码待补充</small></div>
        </div>
        <div className="footer-bottom"><span>© 2026 营康大昌医疗科技 版权所有</span><div><span>隐私政策待完善</span><span>网站条款待完善</span><span>备案信息待补充</span></div></div>
        <p className="footer-disclaimer">本网站信息仅用于企业业务与项目介绍，不替代专业医疗建议。</p>
      </footer>

      <button className={`back-top ${showTop ? "show" : ""}`} aria-label="返回顶部" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><Icon name="up" /></button>

      {activeBusiness !== null && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveBusiness(null); }}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="business-modal-title"><button ref={modalCloseRef} className="modal-close" aria-label="关闭" onClick={() => setActiveBusiness(null)}><Icon name="close" /></button><div className="modal-heading"><span className="modal-icon"><Icon name={businesses[activeBusiness].icon} size={28} /></span><div><p className="eyebrow">BUSINESS {businesses[activeBusiness].num}</p><h2 id="business-modal-title">{businesses[activeBusiness].title}</h2></div></div><p className="modal-lead">{businesses[activeBusiness].detail}</p><h3>核心能力</h3><ul>{businesses[activeBusiness].abilities.map((ability) => <li key={ability}><Icon name="check" size={17} />{ability}</li>)}</ul><div className="modal-client"><span>适用客户</span><p>{businesses[activeBusiness].clients}</p></div><button className="button solid" onClick={openConsult}>咨询这项业务</button></section></div>}

      {consultOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setConsultOpen(false); }}><section className="modal consult-modal" role="dialog" aria-modal="true" aria-labelledby="consult-title"><button ref={modalCloseRef} className="modal-close" aria-label="关闭" onClick={() => setConsultOpen(false)}><Icon name="close" /></button>{formSent ? <div className="success-state"><span><Icon name="check" size={34} /></span><p className="eyebrow">SUBMITTED</p><h2 id="consult-title">需求已记录</h2><p>感谢您的关注。当前为官网展示版本，正式上线时请接入企业电话、邮箱或客户管理系统，以便及时跟进。</p><button className="button solid" onClick={() => setConsultOpen(false)}>完成</button></div> : <><p className="eyebrow">PROJECT INQUIRY</p><h2 id="consult-title">咨询项目合作</h2><p className="modal-lead">留下基础信息，我们将根据您的机构类型与项目阶段准备沟通资料。</p><form onSubmit={submitForm}><label>姓名<input required name="name" placeholder="请输入您的姓名" /></label><label>联系电话<input required name="phone" type="tel" placeholder="请输入联系电话" /></label><label>机构名称<input name="organization" placeholder="请输入机构名称" /></label><label>合作方向<select name="direction" defaultValue=""><option value="" disabled>请选择合作方向</option>{businesses.map((business) => <option key={business.title}>{business.title}</option>)}</select></label><label className="full">需求简述<textarea name="message" rows={3} placeholder="请简要说明机构类型、所在城市和项目阶段" /></label><button className="button solid submit" type="submit">提交咨询</button></form></>}</section></div>}
    </main>
  );
}
