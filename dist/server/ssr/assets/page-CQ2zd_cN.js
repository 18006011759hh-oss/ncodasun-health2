import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Icon = ({ name, size = 22 }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": "true",
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.7",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: {
			hospital: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 21v-4h4v4M9 7h4M11 5v4M3 21h18" })] }),
			spark: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3 9.8 8.8 4 11l5.8 2.2L12 19l2.2-5.8L20 11l-5.8-2.2L12 3Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m5 3 .7 1.8L7.5 5.5l-1.8.7L5 8l-.7-1.8-1.8-.7 1.8-.7L5 3Z" })] }),
			box: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m4 7 8-4 8 4-8 4-8-4Z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m4 7 8 4 8-4v10l-8 4-8-4V7Z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 11v10" })
			] }),
			support: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 13a8 8 0 0 1 16 0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 13v5h3v-5H4Zm13 0v5h3v-5h-3ZM17 20c-1.4 1-3.1 1-5 1" })] }),
			system: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "5",
				width: "18",
				height: "12",
				rx: "2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 21h8M12 17v4M7 9h4v4H7zM14 9h3M14 12h3" })] }),
			software: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4",
				y: "3",
				width: "16",
				height: "18",
				rx: "2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 8h8M8 12h3M8 16h8M14 12h2" })] }),
			cloud: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.5 18a4.5 4.5 0 0 1-.4-9A6 6 0 0 1 17.6 8a5 5 0 0 1 .4 10H6.5Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 14 3-3 3 3M12 11v7" })] }),
			plan: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "8"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 8v8M8 12h8" })] }),
			check: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m5 12 4 4L19 6" }),
			close: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M18 6 6 18" }) }),
			menu: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 12h16M4 17h16" }) }),
			up: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 14 6-6 6 6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 8v12" })] })
		}[name]
	});
};
var heroSlides = [
	{
		image: "/hero-consultation.jpg",
		eyebrow: "服务医疗机构 · 健康服务机构 · 企业客户",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"个体化营养补充剂",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"整体解决方案"
		] }),
		text: "融合专业营养方案、组份制剂、智能配置设备与数字化管理系统，为医疗机构及健康服务场景提供可落地的一体化服务。"
	},
	{
		image: "/hero-preparation.jpg",
		eyebrow: "PIFAS 智能配置系统",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"从营养方案",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"到精准配置与管理"
		] }),
		text: "以智能设备、配置软件、标准流程与供应链管理协同连接方案设计、精准配制和持续服务。"
	},
	{
		image: "/hero-products.jpg",
		eyebrow: "组份制剂 · 智配云链",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"专业配置能力",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"支撑多元服务场景"
		] }),
		text: "围绕不同个体的营养需求，提供科学灵活的组份设计、配置支持及云端供应协同。"
	}
];
var businesses = [
	{
		icon: "spark",
		num: "01",
		title: "私域个体化营养方案",
		value: "把专业营养评估、方案与持续服务带入私域健康管理场景。",
		abilities: [
			"营养评估",
			"方案与产品组合",
			"持续服务支持"
		],
		clients: "私域健康管理、健康服务机构、企业客户",
		detail: "面向私域健康管理、健康服务机构和企业客户，根据不同人群需求，提供营养评估、个体化方案设计、产品组合及持续服务支持。"
	},
	{
		icon: "hospital",
		num: "02",
		title: "PIFAS建设咨询",
		value: "从项目调研到运营落地，建立完整、可执行的建设路径。",
		abilities: [
			"空间与流程规划",
			"软硬件配置",
			"运营落地咨询"
		],
		clients: "医院、专业健康机构",
		detail: "面向医院及专业健康机构，提供PIFAS项目从前期调研、空间与流程规划、软硬件配置到运营落地的全过程咨询服务。"
	},
	{
		icon: "box",
		num: "03",
		title: "个体化营养组份制剂",
		value: "围绕个体营养需求，提供科学、灵活、精准的组份配置支持。",
		abilities: [
			"营养组份设计",
			"精准配置支持",
			"专业交付管理"
		],
		clients: "医疗机构、健康服务机构、专业渠道",
		detail: "围绕不同个体的营养需求，提供科学、灵活的营养组份设计与制剂配置支持，突出精准配置和专业交付能力。"
	},
	{
		icon: "cloud",
		num: "04",
		title: "PIFAS智配－云链方案",
		value: "以设备、软件和云端供应链协同，让配置业务一体化运行。",
		abilities: [
			"方案与组份管理",
			"智能精准配制",
			"供应链协同"
		],
		clients: "PIFAS项目方、医疗及健康服务机构",
		detail: "通过智能配置设备、管理软件和云端供应链，实现方案录入、组份选择、精准配制、数据管理和供应协同的一体化运行。"
	}
];
var pifasParts = [
	{
		icon: "system",
		num: "01",
		title: "智能配置设备",
		text: "承接组份选择与精准配制环节。"
	},
	{
		icon: "software",
		num: "02",
		title: "数字化管理软件",
		text: "支持方案、配置与过程信息管理。"
	},
	{
		icon: "plan",
		num: "03",
		title: "个体化营养方案",
		text: "连接需求评估与组份设计。"
	},
	{
		icon: "cloud",
		num: "04",
		title: "云端供应链协同",
		text: "协同产品、组份与持续运营支持。"
	}
];
var pifasFlow = [
	"需求评估",
	"个体化方案生成",
	"营养组份选择",
	"智能精准配制",
	"数据与供应链管理",
	"持续跟踪优化"
];
var buildSteps = [
	[
		"01",
		"项目调研与需求分析",
		"厘清业务定位、服务对象与建设边界。"
	],
	[
		"02",
		"建设方案与空间规划",
		"规划功能分区、业务动线和实施路径。"
	],
	[
		"03",
		"设备及软件系统配置",
		"结合项目需求完成软硬件方案配置。"
	],
	[
		"04",
		"产品和组份体系导入",
		"建立匹配业务场景的组份与产品体系。"
	],
	[
		"05",
		"人员培训与试运行",
		"完成岗位培训、流程验证与试运行支持。"
	],
	[
		"06",
		"运营支持与持续优化",
		"围绕实际运行持续协同并优化服务。"
	]
];
var scenarios = [
	{
		title: "医院营养科",
		text: "承接院内个体化营养服务与配置场景。",
		image: "/case-nutrition-center.jpg"
	},
	{
		title: "健康管理中心",
		text: "支持评估、方案、产品组合与跟踪服务。",
		image: "/hero-consultation.jpg"
	},
	{
		title: "专业医疗机构",
		text: "构建专业、规范的营养服务交付能力。",
		image: "/hero-preparation.jpg"
	},
	{
		title: "其他个体化营养场景",
		text: "面向私域与企业健康服务灵活落地。",
		image: "/hero-products.jpg"
	}
];
var capabilities = [
	"个体化营养方案能力",
	"PIFAS项目建设能力",
	"组份制剂配置能力",
	"智能设备与软件协同能力",
	"云端供应链与运营支持能力"
];
var navItems = [
	["business", "核心业务"],
	["pifas", "PIFAS系统"],
	["consulting", "建设咨询"],
	["cases", "项目案例"],
	["capabilities", "专业能力"]
];
function Home() {
	const [activeSlide, setActiveSlide] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [activeBusiness, setActiveBusiness] = (0, import_react.useState)(null);
	const [consultOpen, setConsultOpen] = (0, import_react.useState)(false);
	const [formSent, setFormSent] = (0, import_react.useState)(false);
	const [activeSection, setActiveSection] = (0, import_react.useState)("home");
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [showTop, setShowTop] = (0, import_react.useState)(false);
	const touchStart = (0, import_react.useRef)(0);
	const modalCloseRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (paused) return;
		const timer = window.setInterval(() => setActiveSlide((value) => (value + 1) % heroSlides.length), 5e3);
		return () => window.clearInterval(timer);
	}, [paused]);
	(0, import_react.useEffect)(() => {
		const ids = ["home", ...navItems.map(([id]) => id)];
		const sectionObserver = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActiveSection(visible.target.id);
		}, {
			rootMargin: "-35% 0px -55%",
			threshold: [
				0,
				.2,
				.5
			]
		});
		ids.forEach((id) => {
			const node = document.getElementById(id);
			if (node) sectionObserver.observe(node);
		});
		const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				revealObserver.unobserve(entry.target);
			}
		}), { threshold: .1 });
		document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
		const onScroll = () => setShowTop(window.scrollY > 720);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			sectionObserver.disconnect();
			revealObserver.disconnect();
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const isModalOpen = activeBusiness !== null || consultOpen;
		document.body.classList.toggle("modal-open", isModalOpen);
		if (isModalOpen) window.setTimeout(() => modalCloseRef.current?.focus(), 20);
		const close = (event) => {
			if (event.key === "Escape") {
				setActiveBusiness(null);
				setConsultOpen(false);
			}
		};
		window.addEventListener("keydown", close);
		return () => {
			document.body.classList.remove("modal-open");
			window.removeEventListener("keydown", close);
		};
	}, [activeBusiness, consultOpen]);
	const changeSlide = (direction) => setActiveSlide((activeSlide + direction + heroSlides.length) % heroSlides.length);
	const onTouchEnd = (event) => {
		const distance = touchStart.current - event.changedTouches[0].clientX;
		if (Math.abs(distance) > 45) changeSlide(distance > 0 ? 1 : -1);
	};
	const openConsult = () => {
		setActiveBusiness(null);
		setFormSent(false);
		setConsultOpen(true);
	};
	const submitForm = (event) => {
		event.preventDefault();
		setFormSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "brand",
						href: "#home",
						"aria-label": "营康大昌医疗科技首页",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "营康大昌医疗科技"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: menuOpen ? "is-open" : "",
						"aria-label": "主要导航",
						children: navItems.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${id}`,
							className: activeSection === id ? "active" : "",
							onClick: () => setMenuOpen(false),
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "nav-consult",
						onClick: openConsult,
						children: "项目咨询"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "menu-button",
						"aria-label": menuOpen ? "关闭菜单" : "打开菜单",
						"aria-expanded": menuOpen,
						onClick: () => setMenuOpen(!menuOpen),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: menuOpen ? "close" : "menu" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero",
				id: "home",
				"aria-roledescription": "轮播",
				onMouseEnter: () => setPaused(true),
				onMouseLeave: () => setPaused(false),
				onTouchStart: (event) => {
					touchStart.current = event.touches[0].clientX;
					setPaused(true);
				},
				onTouchEnd: (event) => {
					onTouchEnd(event);
					setPaused(false);
				},
				children: [
					heroSlides.map((slide, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `hero-slide ${index === activeSlide ? "active" : ""}`,
						"aria-hidden": index !== activeSlide,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: slide.image,
								alt: "",
								fetchPriority: index === 0 ? "high" : "auto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hero-eyebrow",
										children: slide.eyebrow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: slide.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: slide.text }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-tags",
										"aria-label": "核心业务标签",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "个体化方案" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "PIFAS建设" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "组份制剂" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "智配云链" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-actions",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "button glass-primary",
											href: "#business",
											children: "探索解决方案"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "button glass-secondary",
											onClick: openConsult,
											children: "咨询项目合作"
										})]
									})
								]
							})
						]
					}, slide.image)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "slider-arrow prev",
						"aria-label": "上一张",
						onClick: () => changeSlide(-1),
						children: "‹"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "slider-arrow next",
						"aria-label": "下一张",
						onClick: () => changeSlide(1),
						children: "›"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "slider-dots",
						"aria-label": "选择轮播页",
						children: heroSlides.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": `第 ${index + 1} 张`,
							"aria-current": index === activeSlide,
							className: index === activeSlide ? "active" : "",
							onClick: () => setActiveSlide(index),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
						}, index))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "business section",
				id: "business",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "CORE BUSINESS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "四大核心业务" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "围绕个体化营养补充剂，把专业方案、项目建设、组份制剂与智能系统连接为完整服务。" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "business-grid reveal",
					children: businesses.map((business, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "business-entry",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "business-top",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "business-number",
									children: business.num
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "business-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: business.icon,
										size: 24
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: business.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "business-value",
								children: business.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: business.abilities.map((ability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "check",
								size: 15
							}), ability] }, ability)) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "business-client",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "适用客户" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: business.clients })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "detail-button",
								onClick: () => setActiveBusiness(index),
								children: "查看详情"
							})
						]
					}, business.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pifas",
				id: "pifas",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pifas-visual reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/solution-center.jpg",
								alt: "个体化营养配置专业场景示意",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "专业服务场景示意" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "system-badge",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "PIFAS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "智能配置系统" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pifas-content reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "PIFAS SYSTEM"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"让方案、配置与运营",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"形成完整系统"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pifas-definition",
								children: "集智能设备、配置软件、标准流程与供应链管理于一体的个体化营养补充剂智能配置系统。"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pifas-parts",
								children: pifasParts.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: part.icon,
										size: 21
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: part.num }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: part.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: part.text })
								] }, part.title))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pifas-flow reveal",
						"aria-label": "PIFAS核心流程",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "CORE FLOW"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "PIFAS 核心运行流程" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: pifasFlow.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })] }, step)) })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "consulting section",
				id: "consulting",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "consulting-head reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "PIFAS CONSULTING"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"从前期规划到运营优化",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"提供全过程建设咨询"
						] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "consulting-note",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "适用场景" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "医院营养科、健康管理中心、专业医疗机构及其他个体化营养服务场景。" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "build-timeline reveal",
						children: buildSteps.map(([num, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: num }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })] })] }, num))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "delivery-strip reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "全过程交付逻辑" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "调研 · 规划 · 配置 · 导入 · 培训 · 运营" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "detail-button light",
							onClick: () => setActiveBusiness(1),
							children: "查看建设咨询详情"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "scenarios section",
				id: "scenarios",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "APPLICATION SCENARIOS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "面向多元专业场景落地" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "同一套专业能力，根据机构定位、服务对象与运营模式形成适配方案。" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "scenario-grid reveal",
					children: scenarios.map((scenario, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: scenario.image,
						alt: "",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["0", index + 1] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: scenario.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: scenario.text })
					] })] }, scenario.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "cases section",
				id: "cases",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "PROJECT CASES"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "项目案例与服务实践" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "真实资料不足的部分明确标记待补充，不以虚构数据替代项目成果。" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "case-grid reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "case-card featured",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "case-image",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/case-nutrition-center.jpg",
								alt: "医院营养配置中心场景示意",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "医院项目 · 场景示意" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "case-content",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "case-title",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "已落地项目" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "厦门市第五医院" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "个体化营养配置室项目" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "项目背景" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "围绕院内个体化营养服务建设专业配置载体。" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "客户需求" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "建立规范的配置空间、服务流程与运行支持。" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "解决方案" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "PIFAS建设咨询与个体化营养配置服务。" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "实施内容" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "空间与流程规划、配置体系导入、运营协同。" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "项目成果" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "具体成果与运营数据待补充" }) })] })
							] })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "case-card pending",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "case-image",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/hero-consultation.jpg",
								alt: "私域营养健康服务场景示意",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "私域服务 · 场景示意" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "case-content",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "case-title",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "案例资料待补充" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "私域个体化营养服务" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "健康服务机构合作方向" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "项目背景" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "待补充" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "客户需求" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "待补充" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "解决方案" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "营养评估、个体化方案、产品组合与持续服务。" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "实施内容" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "待补充" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "项目成果" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "待补充" }) })] })
							] })]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "capabilities",
				id: "capabilities",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "capability-copy reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "PROFESSIONAL CAPABILITIES"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"以系统协同与专业交付",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"区别于普通产品供应"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "营康大昌围绕方案、建设、制剂、设备软件与供应链形成协同能力，服务项目从规划走向稳定运行。" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "button solid",
							onClick: openConsult,
							children: "获取项目沟通"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "capability-list reveal",
					children: capabilities.map((capability, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: String(index + 1).padStart(2, "0") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: capability }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "check",
							size: 18
						})
					] }, capability))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "contact section reveal",
				id: "contact",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "PROJECT COOPERATION"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"让个体化营养服务",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"真正落地运行"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "告诉我们您的机构类型与项目阶段，获取针对性的业务沟通与资料支持。" })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "button solid large",
					onClick: openConsult,
					children: "咨询项目合作"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "site-footer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-brand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "footer-logo",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/logo.png",
										alt: "营康大昌医疗科技"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "围绕个体化营养补充剂，提供专业营养方案、PIFAS建设咨询、组份制剂和智能配置系统服务。" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-column",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "核心业务" }), businesses.map((business) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#business",
									children: business.title
								}, business.title))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-column",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "快速导航" }),
									navItems.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `#${id}`,
										children: label
									}, id)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#contact",
										children: "咨询联系"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-column footer-contact",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "联系我们" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "公司地址" }), "待补充"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "联系电话" }), "待补充"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "电子邮箱" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:contact@ncodasun.com",
										children: "contact@ncodasun.com"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-qr",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-label": "公众号二维码占位",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "QR" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "官方公众号" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "二维码待补充" })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-bottom",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 营康大昌医疗科技 版权所有" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "隐私政策待完善" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "网站条款待完善" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "备案信息待补充" })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "footer-disclaimer",
						children: "本网站信息仅用于企业业务与项目介绍，不替代专业医疗建议。"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: `back-top ${showTop ? "show" : ""}`,
				"aria-label": "返回顶部",
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "up" })
			}),
			activeBusiness !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "modal-backdrop",
				role: "presentation",
				onMouseDown: (event) => {
					if (event.target === event.currentTarget) setActiveBusiness(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "modal",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "business-modal-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							ref: modalCloseRef,
							className: "modal-close",
							"aria-label": "关闭",
							onClick: () => setActiveBusiness(null),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "close" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "modal-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "modal-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: businesses[activeBusiness].icon,
									size: 28
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: ["BUSINESS ", businesses[activeBusiness].num]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "business-modal-title",
								children: businesses[activeBusiness].title
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "modal-lead",
							children: businesses[activeBusiness].detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "核心能力" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: businesses[activeBusiness].abilities.map((ability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "check",
							size: 17
						}), ability] }, ability)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "modal-client",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "适用客户" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: businesses[activeBusiness].clients })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "button solid",
							onClick: openConsult,
							children: "咨询这项业务"
						})
					]
				})
			}),
			consultOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "modal-backdrop",
				role: "presentation",
				onMouseDown: (event) => {
					if (event.target === event.currentTarget) setConsultOpen(false);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "modal consult-modal",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "consult-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						ref: modalCloseRef,
						className: "modal-close",
						"aria-label": "关闭",
						onClick: () => setConsultOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "close" })
					}), formSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "success-state",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "check",
								size: 34
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "SUBMITTED"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "consult-title",
								children: "需求已记录"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "感谢您的关注。当前为官网展示版本，正式上线时请接入企业电话、邮箱或客户管理系统，以便及时跟进。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "button solid",
								onClick: () => setConsultOpen(false),
								children: "完成"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "PROJECT INQUIRY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "consult-title",
							children: "咨询项目合作"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "modal-lead",
							children: "留下基础信息，我们将根据您的机构类型与项目阶段准备沟通资料。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submitForm,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["姓名", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									name: "name",
									placeholder: "请输入您的姓名"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["联系电话", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									name: "phone",
									type: "tel",
									placeholder: "请输入联系电话"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["机构名称", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "organization",
									placeholder: "请输入机构名称"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["合作方向", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "direction",
									defaultValue: "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "请选择合作方向"
									}), businesses.map((business) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: business.title }, business.title))]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "full",
									children: ["需求简述", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										rows: 3,
										placeholder: "请简要说明机构类型、所在城市和项目阶段"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "button solid submit",
									type: "submit",
									children: "提交咨询"
								})
							]
						})
					] })]
				})
			})
		]
	});
}
//#endregion
export { Home as default };
