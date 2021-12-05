(this["webpackJsonpsite-de-check"] = this["webpackJsonpsite-de-check"] || []).push([
    [0], {
        14: function(e, t, s) {},
        15: function(e, t, s) {},
        17: function(e, t, s) {
            "use strict";
            s.r(t);
            var i = s(2),
                a = s.n(i),
                n = s(8),
                c = s.n(n),
                l = (s(14), s(9)),
                d = s(3),
                r = s(4),
                o = s(1),
                h = s(6),
                p = s(5),
                u = (s(15), s(0)),
                j = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s(e) { var i; return Object(d.a)(this, s), (i = t.call(this, e)).handleSubmit = i.handleSubmit.bind(Object(o.a)(i)), i.handleDragIn = i.handleDragIn.bind(Object(o.a)(i)), i.handleDragOut = i.handleDragOut.bind(Object(o.a)(i)), i.fileInput = a.a.createRef(), i.state = { highlight: !1, fileUploaded: !1 }, i }
                    return Object(r.a)(s, [{ key: "handleSubmit", value: function(e) { e.preventDefault(), e.stopPropagation(), this.props.onFileChange(this.fileInput.current.files[0]), this.setState({ highlight: !0, fileUploaded: !0 }) } }, { key: "handleDragIn", value: function(e) { e.preventDefault(), e.stopPropagation(), this.setState({ highlight: !0 }) } }, { key: "handleDragOut", value: function(e) { e.preventDefault(), e.stopPropagation(), this.setState({ highlight: !1 }) } }, { key: "handleDrop", value: function(e) { e.preventDefault(), e.stopPropagation(), this.setState({ highlight: !0, fileUploaded: !0 }), this.props.onFileChange(e.dataTransfer.files[0]) } }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state.highlight ? "highlight card" : "card";
                            return Object(u.jsx)("div", { id: "fileUploaderArea", onDrop: function(t) { return e.handleDrop(t) }, onDragLeave: function(t) { return e.handleDragOut(t) }, onDragEnter: function(t) { return e.handleDragIn(t) }, onDragOver: function(t) { return e.handleDragIn(t) }, children: Object(u.jsxs)("form", { className: t, children: [Object(u.jsx)("input", { id: "fileElem", name: "fileElem", type: "file", accept: "image/*", ref: this.fileInput, onChange: this.handleSubmit }), Object(u.jsx)("label", { className: "button", htmlFor: "fileElem", children: Object(u.jsx)("div", { children: this.state.fileUploaded ? this.props.labels.fileUploaded[this.props.selectedLanguage] : this.props.labels.dragAndDrop[this.props.selectedLanguage] }) })] }) })
                        }
                    }]), s
                }(i.Component),
                b = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s() { return Object(d.a)(this, s), t.apply(this, arguments) }
                    return Object(r.a)(s, [{ key: "render", value: function() { var e; return e = "undefined" === typeof this.props.selectedSpecName ? this.props.labels.pleaseSelect[this.props.selectedLanguage] : "No match" === this.props.selectedSpecName ? this.props.labels.noMatch[this.props.selectedLanguage] : this.props.selectedSpecName[this.props.selectedLanguage], Object(u.jsx)("div", { id: "conformityCheckerArea", children: Object(u.jsx)("div", { className: "card", children: Object(u.jsxs)("div", { className: "conformityCheckerTable", children: [Object(u.jsx)("div", { className: "specNameFirstRow", children: Object(u.jsx)("div", { children: e }) }), Object(u.jsx)("div", { className: "tableFirstRow", children: Object(u.jsx)("div", { children: " " }) }), Object(u.jsx)("div", { children: Object(u.jsxs)("div", { children: [" ", this.props.labels.size[this.props.selectedLanguage], " "] }) }), Object(u.jsx)("div", { children: Object(u.jsx)("div", { children: this.props.labels.weight[this.props.selectedLanguage] }) }), Object(u.jsx)("div", { children: Object(u.jsx)("div", { children: this.props.labels.extension[this.props.selectedLanguage] }) }), Object(u.jsx)("div", { className: "tableFirstRow", children: Object(u.jsx)("div", { children: this.props.labels.uploadedFile[this.props.selectedLanguage] }) }), Object(u.jsx)("div", { children: Object(u.jsxs)("div", { children: [" ", this.props.uploadSize, " "] }) }), Object(u.jsx)("div", { children: Object(u.jsx)("div", { children: this.props.uploadWeight > 0 ? Math.floor(this.props.uploadWeight / 100) / 10 + "ko" : "" }) }), Object(u.jsx)("div", { children: Object(u.jsxs)("div", { children: [" ", this.props.uploadExtension, " "] }) }), Object(u.jsx)("div", { className: "tableFirstRow", children: Object(u.jsx)("div", { children: this.props.labels.selectedSpec[this.props.selectedLanguage] }) }), Object(u.jsx)("div", { children: Object(u.jsxs)("div", { children: [" ", this.props.specSize, " "] }) }), Object(u.jsx)("div", { children: Object(u.jsx)("div", { children: this.props.specWeight > 0 ? Math.floor(this.props.specWeight / 100) / 10 + "ko" : "" }) }), Object(u.jsx)("div", { children: Object(u.jsxs)("div", { children: [" ", this.props.specExtensions.join(", "), " "] }) }), Object(u.jsx)("div", { className: "tableFirstRow", children: Object(u.jsx)("div", { children: this.props.labels.status[this.props.selectedLanguage] }) }), Object(u.jsx)("div", { children: Object(u.jsx)("div", { children: this.props.specSize === this.props.uploadSize && "" !== this.props.specSize ? "\u2705" : "\u274c" }) }), Object(u.jsx)("div", { children: Object(u.jsx)("div", { children: this.props.uploadWeight > 0 && this.props.uploadWeight < this.props.specWeight ? "\u2705" : "\u274c" }) }), Object(u.jsx)("div", { children: Object(u.jsx)("div", { children: this.props.specExtensions.includes(this.props.uploadExtension) ? "\u2705" : "\u274c" }) })] }) }) }) } }]), s
                }(i.Component),
                g = b,
                f = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s(e) { var i; return Object(d.a)(this, s), (i = t.call(this, e)).handleChange = i.handleChange.bind(Object(o.a)(i)), i.state = { imageLoaded: !1, imageWidth: "100%" }, i }
                    return Object(r.a)(s, [{ key: "handleChange", value: function(e) { this.props.onImageChange(e.target.width + "x" + e.target.height), this.setState({ imageLoaded: !0, imageWidth: e.target.width }) } }, {
                        key: "render",
                        value: function() {
                            var e;
                            "undefined" !== typeof this.state.imageLoaded && (e = this.state.imageLoaded ? "visible" : "hidden");
                            var t, s, i, a = { visibility: e },
                                n = 1;
                            return this.state.imageWidth > window.screen.width && (n = window.screen.width / this.state.imageWidth * .95), "undefined" !== typeof this.props.specs[this.props.selectedSpec] && Object.keys(this.props.specs[this.props.selectedSpec].skinGuidelines).length > 0 ? (a = { gridTemplateColumns: "1fr " + this.props.specs[this.props.selectedSpec].skinGuidelines.skinContentWidth + "px 1fr", gridTemplateRows: this.props.specs[this.props.selectedSpec].skinGuidelines.skinTopBorderHeight + "px " + this.props.specs[this.props.selectedSpec].skinGuidelines.skinHeaderHeight + "px 1fr", visibility: e, display: "grid", justifyItems: "center", width: this.state.imageWidth, transformOrigin: "top center", transform: "scale(" + n + ")" }, t = { gridColumnStart: 1, gridColumnEnd: -1, gridRowStart: 1, gridRowEnd: -1 }, s = { gridColumnStart: 1, gridColumnEnd: -1, gridRowStart: 1, gridRowEnd: 2, borderBottom: "red 3px dotted", backgroundColor: "rgba(255,0,0,0.5)", width: "100%" }, i = { gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 3, gridRowEnd: 4, borderTop: "red 3px dotted", borderRight: "red 3px dotted", borderLeft: "red 3px dotted", backgroundColor: "rgba(255,0,0,0.5)", width: "100%" }) : a = { width: this.state.imageWidth, transformOrigin: "top center", transform: "scale(" + n + ")" }, Object(u.jsxs)("div", { className: "imageZone", style: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }, children: [Object(u.jsx)("div", { children: " " }), Object(u.jsxs)("div", { className: "gallery", style: a, children: [Object(u.jsx)("img", { alt: "", className: "uploadedImage", style: t, src: this.props.src, onLoad: this.handleChange }), Object(u.jsx)("div", { className: "borderZone", style: s }), Object(u.jsx)("div", { className: "headerZone", style: undefined }), Object(u.jsx)("div", { className: "contentZone", style: i })] })] })
                        }
                    }]), s
                }(i.Component),
                O = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s(e) { var i; return Object(d.a)(this, s), (i = t.call(this, e)).handleClick = i.handleClick.bind(Object(o.a)(i)), i }
                    return Object(r.a)(s, [{ key: "handleClick", value: function(e) { e.preventDefault(), e.stopPropagation(), this.props.onWebsiteChange(this.props.website) } }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.selectedWebsite === this.props.website ? "selected card" : "card";
                            return Object(u.jsx)("div", { className: t, onClick: function(t) { return e.handleClick(t) }, children: this.props.website })
                        }
                    }]), s
                }(i.Component),
                v = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s() { return Object(d.a)(this, s), t.apply(this, arguments) }
                    return Object(r.a)(s, [{ key: "render", value: function() { var e = this; return Object(u.jsx)("div", { id: "websiteSelectorArea", className: "module", children: this.props.websiteList.map((function(t) { return Object(u.jsx)(O, { website: t, onWebsiteChange: e.props.onWebsiteChange, selectedWebsite: e.props.selectedWebsite }, t) })) }) } }]), s
                }(i.Component),
                m = v,
                x = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s(e) { var i; return Object(d.a)(this, s), (i = t.call(this, e)).handleClick = i.handleClick.bind(Object(o.a)(i)), i }
                    return Object(r.a)(s, [{ key: "handleClick", value: function(e) { e.preventDefault(), e.stopPropagation(), this.props.onDeviceChange(this.props.device) } }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.selectedDevice === this.props.device ? "selected card" : "card";
                            return Object(u.jsxs)("div", { className: t, onClick: function(t) { return e.handleClick(t) }, children: [" ", this.props.device, " "] })
                        }
                    }]), s
                }(i.Component),
                C = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s() { return Object(d.a)(this, s), t.apply(this, arguments) }
                    return Object(r.a)(s, [{ key: "render", value: function() { var e = this; return Object(u.jsx)("div", { id: "deviceSelectorArea", className: "module", children: this.props.deviceList.map((function(t) { return Object(u.jsx)(x, { device: t, onDeviceChange: e.props.onDeviceChange, selectedDevice: e.props.selectedDevice }, t) })) }) } }]), s
                }(i.Component),
                S = C,
                L = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s(e) { var i; return Object(d.a)(this, s), (i = t.call(this, e)).handleClick = i.handleClick.bind(Object(o.a)(i)), i }
                    return Object(r.a)(s, [{ key: "handleClick", value: function(e) { e.preventDefault(), e.stopPropagation(), this.props.onFormatChange(this.props.format) } }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.selectedFormat === this.props.format ? "selected card" : "card";
                            return Object(u.jsx)("div", { className: t, onClick: function(t) { return e.handleClick(t) }, children: this.props.format[this.props.selectedLanguage] })
                        }
                    }]), s
                }(i.Component),
                N = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s() { return Object(d.a)(this, s), t.apply(this, arguments) }
                    return Object(r.a)(s, [{ key: "render", value: function() { var e = this; return Object(u.jsx)("div", { id: "formatSelectorArea", className: "module", children: this.props.formatList.map((function(t) { return Object(u.jsx)(L, { format: t, onFormatChange: e.props.onFormatChange, selectedFormat: e.props.selectedFormat, selectedLanguage: e.props.selectedLanguage }, t.en) })) }) } }]), s
                }(i.Component),
                y = N,
                k = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s(e) { var i; return Object(d.a)(this, s), (i = t.call(this, e)).handleClick = i.handleClick.bind(Object(o.a)(i)), i }
                    return Object(r.a)(s, [{ key: "handleClick", value: function() { this.props.onLanguageChange() } }, { key: "render", value: function() { return Object(u.jsx)("div", { id: "languageSelector", className: "language card", onClick: this.handleClick, children: Object(u.jsx)("div", { id: "alternativeLanguage", children: "en" === this.props.language ? "FRAN\xc7AIS" : "ENGLISH" }) }) } }]), s
                }(i.Component),
                E = function(e) {
                    Object(h.a)(s, e);
                    var t = Object(p.a)(s);

                    function s(e) { var i; return Object(d.a)(this, s), (i = t.call(this, e)).selectedSpec = "", i.handleSpecNameChange = i.handleSpecNameChange.bind(Object(o.a)(i)), i.handleFileChange = i.handleFileChange.bind(Object(o.a)(i)), i.handleImgSrcChange = i.handleImgSrcChange.bind(Object(o.a)(i)), i.handleImageChange = i.handleImageChange.bind(Object(o.a)(i)), i.handleWebsiteChange = i.handleWebsiteChange.bind(Object(o.a)(i)), i.handleFormatChange = i.handleFormatChange.bind(Object(o.a)(i)), i.handleDeviceChange = i.handleDeviceChange.bind(Object(o.a)(i)), i.hangleLanguageChange = i.hangleLanguageChange.bind(Object(o.a)(i)), i.findEligibleSpec = i.findEligibleSpec.bind(Object(o.a)(i)), i.onlyUnique = i.onlyUnique.bind(Object(o.a)(i)), i.dynamicSort = i.dynamicSort.bind(Object(o.a)(i)), i.handleData = i.handleData.bind(Object(o.a)(i)), i.state = { specs: {}, selectedLanguage: "en", selectedWebsite: "", selectedFormat: {}, selectedDevice: "", selectedSpec: {}, specFound: !1, websiteList: [], deviceList: [], formatList: [], file: {}, imgSrc: "", uploadSize: "", uploadWeight: "", uploadExtension: "", specExtensions: [], specSize: "", specWeight: "", loaded: !1, loadingStatus: "LOADING...", labels: { loading: { en: "LOADING", fr: "CHARGEMENT" }, title: { en: "MEDIA SPECIFICATIONS CONFORMITY CHECKER", fr: "V\xc9RIFICATEUR DE CONFORMIT\xc9 AUX SP\xc9CIFICATIONS M\xc9DIA" }, websiteSelect: { en: "SELECT A WEBSITE", fr: "S\xc9LECTIONNEZ UN SITE" }, formatSelect: { en: "SELECT A FORMAT", fr: "S\xc9LECTIONNEZ UN FORMAT" }, deviceSelect: { en: "SELECT A DEVICE", fr: "S\xc9LECTIONNEZ UN TYPE D'APPAREIL" }, uploadFile: { en: "UPLOAD A FILE", fr: "T\xc9L\xc9CHARGEZ UN FICHIER" }, checkConformity: { en: "CHECK CONFORMITY", fr: "V\xc9RIFIEZ LA CONFORMIT\xc9" }, dragAndDrop: { en: "Click to chose a file or drag and drop it here", fr: "Cliquez pour choisir un fichier ou glissez et d\xe9posez-le dans cette zone" }, fileUploaded: { en: "File successfuly uploaded", fr: "Fichier t\xe9l\xe9charg\xe9 avec succ\xe8s" }, uploadedFile: { en: "uploaded file", fr: "fichier t\xe9l\xe9charg\xe9" }, selectedSpec: { en: "selected spec", fr: "spec s\xe9lectionn\xe9e" }, status: { en: "status", fr: "statut" }, size: { en: "size", fr: "dimension" }, weight: { en: "weight", fr: "poids" }, extension: { en: "extension", fr: "type" }, pleaseSelect: { en: "Please select website, format and device", fr: "Veuillez s\xe9lectionner un site, un format et un type d'appareil" }, noMatch: { en: "No match", fr: "Aucune correspondance" } } }, i }
                    return Object(r.a)(s, [{ key: "onlyUnique", value: function(e, t, s) { return s.indexOf(e) === t } }, {
                        key: "dynamicSort",
                        value: function(e) {
                            var t = 1;
                            return "-" === e[0] && (t = -1, e = e.substr(1)),
                                function(s, i) { return (s[e] < i[e] ? -1 : s[e] > i[e] ? 1 : 0) * t }
                        }
                    }, {
                        key: "handleData",
                        value: function() {
                            var e = this;
                            fetch("https://site-de-check-notion-api.appspot.com/api/getdata.json").then((function(e) { return e.json() })).then((function(t) {
                                e.setState({ specs: t });
                                var s = [];
                                Object.entries(e.state.specs).forEach((function(e) { e[1].websites.forEach((function(e) { s.push(e) })) })), s = (s = s.filter(e.onlyUnique)).sort(), e.setState({ websiteList: s });
                                var i = [];
                                Object.entries(e.state.specs).forEach((function(e) { e[1].devices.forEach((function(e) { i.push(e) })) })), i = (i = i.filter(e.onlyUnique)).sort(), e.setState({ deviceList: i });
                                var a = [];
                                Object.entries(e.state.specs).forEach((function(e) {
                                    var t = Object(l.a)(e, 2),
                                        s = (t[0], t[1]);
                                    a.push(s.format)
                                })), (a = Array.from(new Set(a.map(JSON.stringify))).map(JSON.parse)).sort(e.dynamicSort("en")), e.setState({ formatList: a, loaded: !0, loadingStatus: "loaded" })
                            })).catch((function(t) { e.setState({ loadingStatus: t }) }))
                        }
                    }, { key: "hangleLanguageChange", value: function() { "en" === this.state.selectedLanguage ? (this.setState({ selectedLanguage: "fr" }), document.title = "WEBEDIA - " + this.state.labels.title.fr) : (this.setState({ selectedLanguage: "en" }), document.title = "WEBEDIA - " + this.state.labels.title.en) } }, { key: "componentDidMount", value: function() { this.handleData() } }, { key: "handleSpecNameChange", value: function(e) { this.setState({ selectedSpecName: e, selectedSpec: this.state.specs[e] }) } }, { key: "handleImageChange", value: function(e) { this.setState({ uploadSize: e }) } }, { key: "handleWebsiteChange", value: function(e) { this.setState({ specFound: !1, selectedWebsite: e, selectedSpec: this.selectedSpec }, (function() { this.findEligibleSpec() })) } }, { key: "handleFormatChange", value: function(e) { this.setState({ specFound: !1, selectedFormat: e, selectedSpec: this.selectedSpec }, (function() { this.findEligibleSpec() })) } }, { key: "handleDeviceChange", value: function(e) { this.setState({ specFound: !1, selectedDevice: e, selectedSpec: this.selectedSpec }, (function() { this.findEligibleSpec() })) } }, { key: "handleImgSrcChange", value: function(e) { this.setState({ imgSrc: e }) } }, {
                        key: "handleFileChange",
                        value: function(e) {
                            var t = this;
                            this.setState({ file: e, uploadExtension: e.type.split("/")[1], uploadWeight: e.size });
                            var s = new FileReader;
                            s.readAsDataURL(e), s.onloadend = function() { t.handleImgSrcChange(s.result) }
                        }
                    }, {
                        key: "findEligibleSpec",
                        value: function() {
                            var e = this;
                            if ("" !== this.state.selectedWebsite && this.state.selectedFormat !== {} && "" !== this.state.selectedDevice) {
                                var t = !1;
                                Object.entries(this.state.specs).forEach((function(s) {
                                    if (!t) {
                                        if (s[1].websites.includes(e.state.selectedWebsite) && s[1].format.en === e.state.selectedFormat.en && s[1].format.fr === e.state.selectedFormat.fr && s[1].devices.includes(e.state.selectedDevice)) return e.setState({ selectedSpec: s[0], specSize: e.state.specs[s[0]].size, specExtensions: e.state.specs[s[0]].extensions, specWeight: e.state.specs[s[0]].maxWeight, selectedSpecName: e.state.specs[s[0]].name }), void(t = !0);
                                        t = !1, e.setState({ selectedSpec: void 0, specSize: void 0, specExtensions: [], specWeight: void 0, selectedSpecName: "No match" })
                                    }
                                }))
                            }
                        }
                    }, { key: "render", value: function() { var e; return e = this.state.loaded ? "loaded" : "", Object(u.jsxs)("div", { id: "App", children: [Object(u.jsxs)("div", { id: "loader", className: e, children: [Object(u.jsx)("div", { className: "loaderCircle", children: Object(u.jsx)("svg", { width: "150", viewBox: "0 0 640 263", xmlns: "http://www.w3.org/2000/svg", children: Object(u.jsxs)("g", { children: [Object(u.jsx)("path", { d: "M0 0L79.07 255.47H158.15L79.07 0H0Z", fill: "#001478" }), Object(u.jsx)("path", { d: "M158.15 0L237.22 255.47H316.29L237.22 0H158.15Z", fill: "#001478" }), Object(u.jsx)("path", { d: "M237.22 0L158.15 255.47H79.07L158.15 0H237.22Z", fill: "#0028BE" }), Object(u.jsx)("path", { d: "M395.37 0L316.29 255.47H237.22L316.29 0H395.37Z", fill: "#0028BE" }), Object(u.jsx)("path", { d: "M553.51 0L474.44 255.47H395.37L474.44 0H553.51Z", fill: "#0028BE" }), Object(u.jsx)("path", { d: "M597.51 262.34C585.17 262.34 574.753 258.063 566.26 249.51C557.767 240.957 553.517 230.483 553.51 218.09C553.51 206.69 557.76 196.8 566.26 188.42C574.76 180.04 585.177 175.85 597.51 175.85C603.105 175.775 608.656 176.852 613.818 179.014C618.979 181.177 623.64 184.379 627.51 188.42C635.837 196.807 640 206.697 640 218.09C640 230.49 635.833 240.963 627.5 249.51C619.167 258.057 609.17 262.333 597.51 262.34Z", fill: "#0028BE" })] }) }) }), Object(u.jsx)("div", { className: "loaderText", children: this.state.labels.loading[this.state.selectedLanguage] })] }), Object(u.jsxs)("main", { children: [Object(u.jsxs)("nav", { children: [Object(u.jsx)("div", { className: "logo", children: Object(u.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100", viewBox: "0 0 640 400.89", children: Object(u.jsx)("g", { id: "Calque_2", "data-name": "Calque 2", children: Object(u.jsxs)("g", { id: "Calque_1-2", "data-name": "Calque 1", children: [Object(u.jsx)("polygon", { className: "cls-1", fill: "#b0c0ea", points: "0 0 79.07 255.47 158.15 255.47 79.07 0 0 0" }), Object(u.jsx)("polygon", { className: "cls-1", fill: "#b0c0ea", points: "158.15 0 237.22 255.47 316.29 255.47 237.22 0 158.15 0" }), Object(u.jsx)("polygon", { className: "cls-1", fill: "#fff", points: "237.22 0 158.15 255.47 79.07 255.47 158.15 0 237.22 0" }), Object(u.jsx)("polygon", { className: "cls-1", fill: "#fff", points: "395.37 0 316.29 255.47 237.22 255.47 316.29 0 395.37 0" }), Object(u.jsx)("polygon", { className: "cls-1", fill: "#fff", points: "553.51 0 474.44 255.47 395.37 255.47 474.44 0 553.51 0" }), Object(u.jsx)("path", { className: "cls-1", fill: "#fff", d: "M597.51,262.34q-18.51,0-31.25-12.83t-12.75-31.42q0-17.1,12.75-29.67t31.25-12.57a40.78,40.78,0,0,1,30,12.57Q640,201,640,218.09q0,18.6-12.5,31.42T597.51,262.34Z" }), Object(u.jsx)("path", { className: "cls-1", fill: "#fff", d: "M192.29,379.23c6.63,0,12.29-2.59,15.52-6.14l19.4,11.15c-7.92,11-19.88,16.65-35.24,16.65-27.65,0-44.78-18.59-44.78-42.67s17.46-42.68,43-42.68c23.6,0,41.06,18.27,41.06,42.68a46.69,46.69,0,0,1-1,9.69H172.89C176,376.32,183.4,379.23,192.29,379.23Zm14.87-29.42C204.58,340.43,197.3,337,190,337c-9.22,0-15.36,4.52-17.62,12.77Z" }), Object(u.jsx)("path", { className: "cls-1", fill: "#fff", d: "M323.8,358.22c0,24.08-17.46,42.67-38.63,42.67-10.84,0-18.76-3.71-24.09-9.86v7.6H236.83V285.47h24.25V325.4c5.33-6.14,13.25-9.86,24.09-9.86C306.34,315.54,323.8,334.13,323.8,358.22Zm-24.25,0c0-12.13-8.08-19.73-19.23-19.73s-19.24,7.6-19.24,19.73,8.08,19.72,19.24,19.72S299.55,370.34,299.55,358.22Z" }), Object(u.jsx)("path", { className: "cls-1", fill: "#fff", d: "M371.69,379.23c6.63,0,12.29-2.59,15.52-6.14l19.4,11.15c-7.92,11-19.88,16.65-35.24,16.65-27.64,0-44.78-18.59-44.78-42.67s17.46-42.68,43-42.68c23.6,0,41.06,18.27,41.06,42.68a46.69,46.69,0,0,1-1,9.69H352.3C355.37,376.32,362.8,379.23,371.69,379.23Zm14.88-29.42C384,340.43,376.71,337,369.43,337c-9.21,0-15.36,4.52-17.62,12.77Z" }), Object(u.jsx)("path", { className: "cls-1", fill: "#fff", d: "M500.42,285.47V398.63H476.17V391c-5.34,6.15-13.26,9.86-24.09,9.86-21.18,0-38.64-18.59-38.64-42.67s17.46-42.68,38.64-42.68c10.83,0,18.75,3.72,24.09,9.86V285.47Zm-24.25,72.75c0-12.13-8.09-19.73-19.24-19.73s-19.24,7.6-19.24,19.73,8.09,19.72,19.24,19.72S476.17,370.34,476.17,358.22Z" }), Object(u.jsx)("path", { className: "cls-1", fill: "#fff", d: "M508.81,317.8h24.24v80.83H508.81Z" }), Object(u.jsx)("path", { className: "cls-1", fill: "#fff", d: "M625.62,317.8v80.83H601.37V391c-5.33,6.15-13.25,9.86-24.09,9.86-21.17,0-38.63-18.59-38.63-42.67s17.46-42.68,38.63-42.68c10.84,0,18.76,3.72,24.09,9.86v-7.6Zm-24.25,40.42c0-12.13-8.08-19.73-19.24-19.73s-19.23,7.6-19.23,19.73,8.08,19.72,19.23,19.72S601.37,370.34,601.37,358.22Z" }), Object(u.jsx)("polygon", { className: "cls-1", fill: "#fff", points: "126.32 317.8 113.81 358.21 101.3 317.8 76.28 317.8 63.77 358.21 51.26 317.8 26.25 317.8 51.26 398.63 76.28 398.63 88.79 358.21 101.3 398.63 126.32 398.63 151.34 317.8 126.32 317.8" }), Object(u.jsx)("path", { className: "cls-1", fill: "#fff", d: "M521.15,310.69A12.36,12.36,0,0,1,512,307a12.5,12.5,0,0,1-3.72-9.17,11.76,11.76,0,0,1,3.72-8.65,12.48,12.48,0,0,1,9.11-3.66,12.48,12.48,0,0,1,12.39,12.31,12.64,12.64,0,0,1-3.65,9.17A11.78,11.78,0,0,1,521.15,310.69Z" })] }) }) }) }), Object(u.jsx)("div", { className: "h1", children: Object(u.jsxs)("h1", { children: [" ", this.state.labels.title[this.state.selectedLanguage], " "] }) }), Object(u.jsx)(k, { onLanguageChange: this.hangleLanguageChange, language: this.state.selectedLanguage })] }), Object(u.jsxs)("section", { children: [Object(u.jsxs)("div", { id: "websiteSelector", children: [Object(u.jsx)("div", { id: "websiteSelectorTitle", className: "title", children: this.state.labels.websiteSelect[this.state.selectedLanguage] }), Object(u.jsx)(m, { websiteList: this.state.websiteList, onWebsiteChange: this.handleWebsiteChange, selectedWebsite: this.state.selectedWebsite })] }), Object(u.jsxs)("div", { id: "formatSelector", children: [Object(u.jsx)("div", { id: "formatSelectorTitle", className: "title", children: this.state.labels.formatSelect[this.state.selectedLanguage] }), Object(u.jsx)(y, { formatList: this.state.formatList, onFormatChange: this.handleFormatChange, selectedFormat: this.state.selectedFormat, selectedLanguage: this.state.selectedLanguage })] }), Object(u.jsxs)("div", { id: "deviceSelector", children: [Object(u.jsx)("div", { id: "deviceSelectorTitle", className: "title", children: this.state.labels.deviceSelect[this.state.selectedLanguage] }), Object(u.jsx)(S, { deviceList: this.state.deviceList, onDeviceChange: this.handleDeviceChange, selectedDevice: this.state.selectedDevice })] }), Object(u.jsxs)("div", { className: "columns", children: [Object(u.jsxs)("div", { id: "fileUploader", children: [Object(u.jsx)("div", { id: "fileUpdloaderTitle", className: "title", children: this.state.labels.uploadFile[this.state.selectedLanguage] }), Object(u.jsx)(j, { onFileChange: this.handleFileChange, labels: this.state.labels, selectedLanguage: this.state.selectedLanguage })] }), Object(u.jsxs)("div", { id: "conformityChecker", children: [Object(u.jsx)("div", { id: "conformityCheckerTitle", className: "title", children: this.state.labels.checkConformity[this.state.selectedLanguage] }), Object(u.jsx)(g, { uploadSize: this.state.uploadSize, uploadWeight: this.state.uploadWeight, uploadExtension: this.state.uploadExtension, specSize: this.state.specSize, specWeight: this.state.specWeight, specExtensions: this.state.specExtensions, selectedSpecName: this.state.selectedSpecName, selectedSpec: this.state.selectedSpec, labels: this.state.labels, selectedLanguage: this.state.selectedLanguage })] })] })] })] }), Object(u.jsx)(f, { src: this.state.imgSrc, onImageChange: this.handleImageChange, specs: this.state.specs, selectedSpec: this.state.selectedSpec })] }) } }]), s
                }(i.Component);
            c.a.render(Object(u.jsx)(a.a.StrictMode, { children: Object(u.jsx)(E, {}) }), document.getElementById("root"))
        }
    },
    [
        [17, 1, 2]
    ]
]);
//# sourceMappingURL=main.03b461c5.chunk.js.map