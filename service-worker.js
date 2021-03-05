/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0.7.0/api/api.html",
    "revision": "45b209852597779799a0922aba1f4c5f"
  },
  {
    "url": "0.7.0/api/index.html",
    "revision": "a05fc25302bbd83ae5b50b69e0da097b"
  },
  {
    "url": "0.7.0/configuration/api.html",
    "revision": "4945332612b0d78639cf99e0cdd41e42"
  },
  {
    "url": "0.7.0/configuration/channels.html",
    "revision": "611825c83d0d288eba80d5db09e08708"
  },
  {
    "url": "0.7.0/configuration/data-sources.html",
    "revision": "830524cff93373854f6b90605e8c5369"
  },
  {
    "url": "0.7.0/configuration/example.html",
    "revision": "a1042b5ad1cc4b1528bf46c2a020834f"
  },
  {
    "url": "0.7.0/configuration/index.html",
    "revision": "95e918f6fc8c91b74f1ad704a80a9cfe"
  },
  {
    "url": "0.7.0/configuration/root.html",
    "revision": "f858b11ce194768a2a3d3cf1128ffa68"
  },
  {
    "url": "0.7.0/configuration/scripts.html",
    "revision": "ba2bc08c9a7815ff0339b5b46f159059"
  },
  {
    "url": "0.7.0/configuration/storages.html",
    "revision": "c3dcf6acbd931254eb625e724aca1d8c"
  },
  {
    "url": "0.7.0/coremodules/about.html",
    "revision": "e5e8f01ec0e9ca6929aeee978b886163"
  },
  {
    "url": "0.7.0/coremodules/alert.html",
    "revision": "57f43f1b296b3a733643619f78bfd104"
  },
  {
    "url": "0.7.0/coremodules/chart.html",
    "revision": "0e193cfc149f60d10cb3e7446ad334fe"
  },
  {
    "url": "0.7.0/coremodules/datasource.html",
    "revision": "6b3cf67adeaf68765e3644ad5eb0b1a8"
  },
  {
    "url": "0.7.0/coremodules/datasource/clickhouse.html",
    "revision": "e19640384b839ebe15355ad3311a02b6"
  },
  {
    "url": "0.7.0/coremodules/datasource/loki.html",
    "revision": "eaff6c23092e2d0b9f7d54add2ee5d72"
  },
  {
    "url": "0.7.0/coremodules/datasource/mysql.html",
    "revision": "d3d477c4c16d1d361e5b88a5c9f34409"
  },
  {
    "url": "0.7.0/coremodules/datasource/postgres.html",
    "revision": "5410a5fac8bff41a512c64ac9b2516d2"
  },
  {
    "url": "0.7.0/coremodules/datasource/prometheus.html",
    "revision": "9d3ea4820867417a25a55a84a2381eb3"
  },
  {
    "url": "0.7.0/coremodules/http.html",
    "revision": "3be64963f289dc40d650a1d0c5a78b26"
  },
  {
    "url": "0.7.0/coremodules/index.html",
    "revision": "fd21168d4b4156b1c991378f344f651e"
  },
  {
    "url": "0.7.0/coremodules/kv.html",
    "revision": "b9868d522279faaa567415e659f1ca73"
  },
  {
    "url": "0.7.0/coremodules/log.html",
    "revision": "f275ec3992d078bf48ca7fcb0af6c5bd"
  },
  {
    "url": "0.7.0/coremodules/runtime.html",
    "revision": "acea3c87465ca87faa0cc1a1ff261c72"
  },
  {
    "url": "0.7.0/coremodules/storage.html",
    "revision": "12797c3266fcf84861293053f9263134"
  },
  {
    "url": "0.7.0/coremodules/test.html",
    "revision": "2fea035ae6cf138d3e2298d77de258be"
  },
  {
    "url": "0.7.0/examples/about.html",
    "revision": "818984dbfb557f89b671c97f50b458a4"
  },
  {
    "url": "0.7.0/examples/index.html",
    "revision": "5714c70b439feba4580f543c2a25f86f"
  },
  {
    "url": "0.7.0/getting_started/about.html",
    "revision": "1588776d2d061e09f3020abd1c4e48dc"
  },
  {
    "url": "0.7.0/getting_started/changelog.html",
    "revision": "ac290eb2cfb696da67a5063ec8198bfc"
  },
  {
    "url": "0.7.0/getting_started/cli-flags.html",
    "revision": "adeb8979ef1dce979886d9bce17b5d01"
  },
  {
    "url": "0.7.0/getting_started/index.html",
    "revision": "d1584283f5922d77d0d5e27ed0a2636b"
  },
  {
    "url": "0.7.0/getting_started/installation.html",
    "revision": "d59284d959af857179f5b2dab88eaf88"
  },
  {
    "url": "0.7.0/index.html",
    "revision": "63a00febe9c51aa9645d6ce0c49d5b2d"
  },
  {
    "url": "0.7.0/luamodules/about.html",
    "revision": "d6426dee21397df9903781bcf762a701"
  },
  {
    "url": "0.7.0/luamodules/index.html",
    "revision": "d3505c4a4801e4fe5000c1982a671121"
  },
  {
    "url": "0.7.0/luamodules/new.html",
    "revision": "55960f288dcb042c55dbdd80bf326d03"
  },
  {
    "url": "0.7.0/luamodules/presets.html",
    "revision": "9d1a9e24429e1b864ccbe0a4a418280c"
  },
  {
    "url": "0.7.0/scripts/about.html",
    "revision": "a0223f09025c930c47ad7a58cc38f8e1"
  },
  {
    "url": "0.7.0/scripts/index.html",
    "revision": "d1945a3384d9ee0a966a5e034066146b"
  },
  {
    "url": "0.7.0/scripts/meta-tags.html",
    "revision": "8cce171a77c15e42f3718043a67fa736"
  },
  {
    "url": "0.7.0/testing/index.html",
    "revision": "7841378df2133d64adac40fe3b6ec972"
  },
  {
    "url": "0.7.0/testing/testing.html",
    "revision": "22c8a88938e8b18df9378c9f5c91302f"
  },
  {
    "url": "404.html",
    "revision": "082da69ccc0167c044dd1462d7c46d9e"
  },
  {
    "url": "assets/css/0.styles.e94e8ad4.css",
    "revision": "0efea9357e3e7ee31148eb7d97aa0d41"
  },
  {
    "url": "assets/img/biglogo.png",
    "revision": "7fe0856d4446141bd48c38093280a7ab"
  },
  {
    "url": "assets/img/example1.e1091a45.png",
    "revision": "e1091a4528905cecebab7c488174c2a6"
  },
  {
    "url": "assets/img/example2.a6a4949a.png",
    "revision": "a6a4949aebcb0a03aa6801a0f2d81a52"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "4db4370e664406c543a9799625ab9cb2"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "7fe0856d4446141bd48c38093280a7ab"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "fb10d04d75cbdab121ea60484a85be9b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4b1c7976.js",
    "revision": "12721a7beb2b670ecd9cc89bbc6978af"
  },
  {
    "url": "assets/js/11.697aee71.js",
    "revision": "382f65e1255a4c2ea7ba86a72677fad9"
  },
  {
    "url": "assets/js/12.fec82e71.js",
    "revision": "21c7699eda9dd7261fe4253ef7fa0b79"
  },
  {
    "url": "assets/js/13.d15dfdfc.js",
    "revision": "6c17e8904af99e09e53fbfc2b58eeb62"
  },
  {
    "url": "assets/js/14.b6096b2b.js",
    "revision": "2387fd65a6f84847b7ec57868c06e780"
  },
  {
    "url": "assets/js/15.ab5fa7ad.js",
    "revision": "45b5300f4b5473ffd004be20701f7eed"
  },
  {
    "url": "assets/js/16.e5a36460.js",
    "revision": "c131275234d0efb0e73ad94a8be0a232"
  },
  {
    "url": "assets/js/17.02dfc485.js",
    "revision": "3ab5c24e99ad457e374c51cf5338a7f0"
  },
  {
    "url": "assets/js/18.ddc0d4f3.js",
    "revision": "5ddb94eee8b140210c49cc145d2d8d14"
  },
  {
    "url": "assets/js/19.9fde680b.js",
    "revision": "dc8ea3bac454f82315d9d53d568a17de"
  },
  {
    "url": "assets/js/2.fbd1c26a.js",
    "revision": "ed066187a8e822495bcbc6f8e204eed4"
  },
  {
    "url": "assets/js/20.945abc7e.js",
    "revision": "d693c45d3921b83c72fab09534092e00"
  },
  {
    "url": "assets/js/21.ca5958dd.js",
    "revision": "55073bdeaa81d9c17994fa3ada409591"
  },
  {
    "url": "assets/js/22.f3263a6f.js",
    "revision": "84c2e38ebf1c85b867472eddaa6f9d70"
  },
  {
    "url": "assets/js/23.6544ca4d.js",
    "revision": "1dbdd9a74614dcd90804d563926d5d95"
  },
  {
    "url": "assets/js/24.c7af5d73.js",
    "revision": "915077600c7288d83016dd95630a66a7"
  },
  {
    "url": "assets/js/25.c2a268bf.js",
    "revision": "b7b12100b6092ee35d21286404b5ec40"
  },
  {
    "url": "assets/js/26.6d4db3fb.js",
    "revision": "fbed1af58d897630e8baec727318f0db"
  },
  {
    "url": "assets/js/27.090c5059.js",
    "revision": "9c40dce911d637e7b55cd64b98cb0df0"
  },
  {
    "url": "assets/js/28.a243266c.js",
    "revision": "567db4111c232821e96f4449f88cc169"
  },
  {
    "url": "assets/js/29.6cbfa072.js",
    "revision": "9cd7603804d579e052cd874878a7e8f3"
  },
  {
    "url": "assets/js/3.7bc397f1.js",
    "revision": "aaf34eddc9e5e414b2f25b784f8a12b1"
  },
  {
    "url": "assets/js/30.83a2166f.js",
    "revision": "c0e78cdb09be90e73b58ab46551f9df5"
  },
  {
    "url": "assets/js/31.5fafdb4e.js",
    "revision": "0f7763fadf1af3774aad36a4b8505b65"
  },
  {
    "url": "assets/js/32.9da52844.js",
    "revision": "75621f5abd555ad468453ac2185541e6"
  },
  {
    "url": "assets/js/33.cbafc4ae.js",
    "revision": "9d3f8d6eb09877fd9106baf68a017822"
  },
  {
    "url": "assets/js/34.600b5eb7.js",
    "revision": "d523ce2c0a8ef7fc33013ffddfed6064"
  },
  {
    "url": "assets/js/35.14ca7ae7.js",
    "revision": "bc4d64fddc8cb41739ccb3e6aa44e991"
  },
  {
    "url": "assets/js/36.27671414.js",
    "revision": "d5ac0698d067e9e53eaf11f12ee29d00"
  },
  {
    "url": "assets/js/37.43b066ea.js",
    "revision": "1ae929bc37e9d1f5a77c814457b0bccc"
  },
  {
    "url": "assets/js/38.733edc55.js",
    "revision": "8dfa8a5d0cae7c6ed1f802a888c4b444"
  },
  {
    "url": "assets/js/39.b7f3ef39.js",
    "revision": "51efd732536a1dc9e3ac0bfc0bcb92cf"
  },
  {
    "url": "assets/js/4.426830bb.js",
    "revision": "ce6c49f28fe5262cb23599529b4f24e7"
  },
  {
    "url": "assets/js/40.d0d392bc.js",
    "revision": "7ba8f06f0e015f4a6cdeb805b0206943"
  },
  {
    "url": "assets/js/41.9f4d0795.js",
    "revision": "60747be9a570896f1e678f3d3f1460eb"
  },
  {
    "url": "assets/js/42.09f1933e.js",
    "revision": "255b9c161b7f0c226923e63e709dd808"
  },
  {
    "url": "assets/js/43.31961cc7.js",
    "revision": "5c13087ba192072cd8b4a54dc477f87b"
  },
  {
    "url": "assets/js/44.03c6b8c5.js",
    "revision": "f83b960a0c69e592162a83fa98b6c8cd"
  },
  {
    "url": "assets/js/45.bde5a945.js",
    "revision": "c563e8997ed6dc7042104d920aaa2d77"
  },
  {
    "url": "assets/js/46.65a06bb6.js",
    "revision": "6e4702d1b68c158e8fd9cdb5b533eee5"
  },
  {
    "url": "assets/js/47.fcb37763.js",
    "revision": "2ee247da34893f649230cca59a076e1a"
  },
  {
    "url": "assets/js/48.eba1cd4c.js",
    "revision": "02c5cabc0764af3a3e8b19b1422b9a62"
  },
  {
    "url": "assets/js/49.0f7929d9.js",
    "revision": "1f5e0001cd60c214916269f71414feed"
  },
  {
    "url": "assets/js/5.0d2f05eb.js",
    "revision": "fd739cca9c7e15cc16b7f66a5bdf3575"
  },
  {
    "url": "assets/js/50.2d81f801.js",
    "revision": "fdea9640fb1446307a9fe901a2eba788"
  },
  {
    "url": "assets/js/51.fed8b1c8.js",
    "revision": "17460b2a3fdb2f810a00f38b80dd10bf"
  },
  {
    "url": "assets/js/52.bbf3f1d1.js",
    "revision": "1ca9edf5dd296af9a67ce6e1797652d3"
  },
  {
    "url": "assets/js/53.e51e138f.js",
    "revision": "f854eeaef7997b2bd96d088cf1c11a40"
  },
  {
    "url": "assets/js/54.91bcaa67.js",
    "revision": "0e1cbe9ec52d0da59a36ff52a7dab0b0"
  },
  {
    "url": "assets/js/55.7249e70f.js",
    "revision": "e4b5a22a577e5cc1786ba7b4f700fc7b"
  },
  {
    "url": "assets/js/56.9139ea3d.js",
    "revision": "a93c5841861c3cfa7a8c177ad73f2ba7"
  },
  {
    "url": "assets/js/57.ccd00abc.js",
    "revision": "59e086f8b52d6f6ed6097c6a230a4812"
  },
  {
    "url": "assets/js/58.a9f24bdf.js",
    "revision": "45f613b00c6716ac591726784e0d59b0"
  },
  {
    "url": "assets/js/59.d2a23f4c.js",
    "revision": "13f5639a84c38bff46885839d4992815"
  },
  {
    "url": "assets/js/6.ce7726d9.js",
    "revision": "3ad7f0e8500ac17e8497689ab2e0d215"
  },
  {
    "url": "assets/js/60.9fa5df8c.js",
    "revision": "03a2285892e947fbd4070d7e7aeeacd6"
  },
  {
    "url": "assets/js/61.1d90eb27.js",
    "revision": "a7191425954564cdad418c4740187891"
  },
  {
    "url": "assets/js/62.7a66191f.js",
    "revision": "7927584c017c07f4183d52a27aa72fb7"
  },
  {
    "url": "assets/js/63.131d507d.js",
    "revision": "a00b7a612095d1ec528f868f1e12a73e"
  },
  {
    "url": "assets/js/64.33e9a58b.js",
    "revision": "727a7a554168ba76952e4ae5b0df9f26"
  },
  {
    "url": "assets/js/65.011f697f.js",
    "revision": "038aa73a7976fa6787f059ce237b2fea"
  },
  {
    "url": "assets/js/66.06e975bf.js",
    "revision": "0ab4c37c29b253c87b68d09e73da4e00"
  },
  {
    "url": "assets/js/67.138f2686.js",
    "revision": "0fb96743d4883add42e6bf23c9ba05a8"
  },
  {
    "url": "assets/js/68.50ee7199.js",
    "revision": "9ac2e647edfabd67ea9031d6ba99a291"
  },
  {
    "url": "assets/js/69.f6729949.js",
    "revision": "b2145c93eb0bcb7a090050589d01237d"
  },
  {
    "url": "assets/js/7.1de9bbd2.js",
    "revision": "eb94d569d6d8872b25a79950c19dbddd"
  },
  {
    "url": "assets/js/70.f3c3cf36.js",
    "revision": "25527ce5728aa90967b113e6743ea3e6"
  },
  {
    "url": "assets/js/71.1b8a8907.js",
    "revision": "54df59a0becb06eac595032c8fc58fdb"
  },
  {
    "url": "assets/js/72.09b78441.js",
    "revision": "09dbfead91338dcd97128753f52fb194"
  },
  {
    "url": "assets/js/73.fb6950a7.js",
    "revision": "935cbc0358c32210e150ce7a7ffc24a7"
  },
  {
    "url": "assets/js/74.7701a1b6.js",
    "revision": "d37e7af4d022213315bea8a55eda7bb1"
  },
  {
    "url": "assets/js/75.db22fed5.js",
    "revision": "e84533462c8dbfa5e568cb802581b208"
  },
  {
    "url": "assets/js/76.57d2d626.js",
    "revision": "6d61c3780645eeea940cc4a2749e69a6"
  },
  {
    "url": "assets/js/77.6a1f5750.js",
    "revision": "70de0a0ab9aa147483b4be7c2027503f"
  },
  {
    "url": "assets/js/78.1b3a6c30.js",
    "revision": "18ec814f489e57f10345cb37069f55d5"
  },
  {
    "url": "assets/js/79.cd44e82b.js",
    "revision": "337df69e9a94871b7d196a3ac7535339"
  },
  {
    "url": "assets/js/8.160849b5.js",
    "revision": "d320994b316e0dc6b8e279588982b590"
  },
  {
    "url": "assets/js/80.dbb433a8.js",
    "revision": "dd57362b9db07a6caac7a474c403a193"
  },
  {
    "url": "assets/js/81.28172b42.js",
    "revision": "b72c5edf11b5152b92387f9018e788d0"
  },
  {
    "url": "assets/js/82.d10ef029.js",
    "revision": "c67684888bdf2172bb53ca49d6593a48"
  },
  {
    "url": "assets/js/83.4fa6a0da.js",
    "revision": "9a139fe617ae22cf0869a46195e622e1"
  },
  {
    "url": "assets/js/84.cda4ce8a.js",
    "revision": "728b03160b64261e98b8fbb005a1d776"
  },
  {
    "url": "assets/js/85.eebce78e.js",
    "revision": "90bf407e5530b164069139ed9e6b76b2"
  },
  {
    "url": "assets/js/86.a6a62bd1.js",
    "revision": "50c8a1567b2c992c56ea21d0c995fa7b"
  },
  {
    "url": "assets/js/87.7e40083f.js",
    "revision": "5cf133ff51dd2ad6cb778d5f52a84242"
  },
  {
    "url": "assets/js/88.2b878149.js",
    "revision": "5689c6c79c6daa6156d49efe2aec338f"
  },
  {
    "url": "assets/js/89.87ba6d99.js",
    "revision": "4db42fa15f8907d14aa3b211fde59286"
  },
  {
    "url": "assets/js/9.58ec60c1.js",
    "revision": "f94884cbe3eeb226a73f10c851092dbd"
  },
  {
    "url": "assets/js/90.80c22ae5.js",
    "revision": "b2876417131ddd6281252be088b35733"
  },
  {
    "url": "assets/js/91.c2a75645.js",
    "revision": "267eb8821ab0ccc749e11937f5b755ea"
  },
  {
    "url": "assets/js/92.1b2d3900.js",
    "revision": "74bb73c4ff225979fc7eca3d626ec1b9"
  },
  {
    "url": "assets/js/93.d31d3e09.js",
    "revision": "fb15e4d4c2d61e16d84c2f7add02889b"
  },
  {
    "url": "assets/js/94.645a2cf4.js",
    "revision": "e3d924c1a7bfc2033f315a08504563ad"
  },
  {
    "url": "assets/js/95.3f469854.js",
    "revision": "d49853e8dc17a1547027a6b75151481f"
  },
  {
    "url": "assets/js/app.30e41ee6.js",
    "revision": "6b090fe5666fe82d66dcbc5e368fac3b"
  },
  {
    "url": "dev/api/api.html",
    "revision": "52b612a27f8a36ac49d7a4b36d971c6e"
  },
  {
    "url": "dev/api/index.html",
    "revision": "6a071cff1df6de063bc7be0836f84aea"
  },
  {
    "url": "dev/configuration/api.html",
    "revision": "d84288769f7627892f097dce48e94a90"
  },
  {
    "url": "dev/configuration/channels.html",
    "revision": "c0568c826a5d8a829031e013177f00d5"
  },
  {
    "url": "dev/configuration/data-sources.html",
    "revision": "ec794748de7095c5835be5351b9f18f4"
  },
  {
    "url": "dev/configuration/example.html",
    "revision": "147a1b40d24e718980298aa0ebf63f22"
  },
  {
    "url": "dev/configuration/index.html",
    "revision": "5f106fd011436cd6314d0ad5f27cc31b"
  },
  {
    "url": "dev/configuration/root.html",
    "revision": "cfb009ec140ddfc18ce4377c968d553c"
  },
  {
    "url": "dev/configuration/scripts.html",
    "revision": "f871eb42eb863f47634306056fc597ef"
  },
  {
    "url": "dev/configuration/storages.html",
    "revision": "b55c268cfe2d0b87594dcb4145c305a8"
  },
  {
    "url": "dev/coremodules/about.html",
    "revision": "20d0512112847cd7e81a63f22fe6b73e"
  },
  {
    "url": "dev/coremodules/alert.html",
    "revision": "408e406c9911998e2348ab114cd9085a"
  },
  {
    "url": "dev/coremodules/chart.html",
    "revision": "72e99a188be3d703ee71b948a3b9bfff"
  },
  {
    "url": "dev/coremodules/datasource.html",
    "revision": "c6d8b89424e8474ff6c841c4cb011b90"
  },
  {
    "url": "dev/coremodules/datasource/clickhouse.html",
    "revision": "2cb2b8cb0e1f7becc28fede2e2448453"
  },
  {
    "url": "dev/coremodules/datasource/loki.html",
    "revision": "c9fcef6f424e60f7a933a59bfa685808"
  },
  {
    "url": "dev/coremodules/datasource/mysql.html",
    "revision": "f579e774b394ae870e030229ffdc8902"
  },
  {
    "url": "dev/coremodules/datasource/postgres.html",
    "revision": "fe7839cdbad211001dba769a68a32d70"
  },
  {
    "url": "dev/coremodules/datasource/prometheus.html",
    "revision": "b173b2fccaeff4ec90b0592df99dc7c0"
  },
  {
    "url": "dev/coremodules/http.html",
    "revision": "b4773b1d15a263ff1353d7b70b083283"
  },
  {
    "url": "dev/coremodules/index.html",
    "revision": "a8e2e77f6d106f469fa82e55dca43401"
  },
  {
    "url": "dev/coremodules/kv.html",
    "revision": "eb9e3c9f3d39f4d35443dcf86a2f60bd"
  },
  {
    "url": "dev/coremodules/log.html",
    "revision": "6a865899bc250f457e2bfe389c733b5c"
  },
  {
    "url": "dev/coremodules/runtime.html",
    "revision": "f7fd6509acd87ae327f3be5069d41ead"
  },
  {
    "url": "dev/coremodules/storage.html",
    "revision": "9330fea5c5b4b2f43cd1e43de505d002"
  },
  {
    "url": "dev/coremodules/test.html",
    "revision": "24681b68d4a2fd9a5e5cca39f2ec7d68"
  },
  {
    "url": "dev/examples/about.html",
    "revision": "4c90153b3d9f270016065fbaadae0490"
  },
  {
    "url": "dev/examples/index.html",
    "revision": "436f9bc419f5f42f662b48770cd9bdd9"
  },
  {
    "url": "dev/getting_started/about.html",
    "revision": "d0b4e0c2c94838f8ed7be9ce37220fa5"
  },
  {
    "url": "dev/getting_started/changelog.html",
    "revision": "453c81ed99cba2023ad0d46fa9d3c2d1"
  },
  {
    "url": "dev/getting_started/cli-flags.html",
    "revision": "acc678dc0bfd50f636cce81e38357e96"
  },
  {
    "url": "dev/getting_started/index.html",
    "revision": "5997f4c3f0588ee32744c3d709bb7707"
  },
  {
    "url": "dev/getting_started/installation.html",
    "revision": "294c11f643553effd3d41aa6f1bcef92"
  },
  {
    "url": "dev/index.html",
    "revision": "a5e18f5a4bad5688bf8b27310ea134a7"
  },
  {
    "url": "dev/luamodules/about.html",
    "revision": "09e1d90b573eddfec755e018d6b0a004"
  },
  {
    "url": "dev/luamodules/index.html",
    "revision": "29591cb96b889625516c7d792ca37cc2"
  },
  {
    "url": "dev/luamodules/new.html",
    "revision": "eab7510950dfa5539d0af46b66aed1f8"
  },
  {
    "url": "dev/luamodules/presets.html",
    "revision": "1736560468cf5c9da7637d55a634783b"
  },
  {
    "url": "dev/scripts/about.html",
    "revision": "d1e5349e73d6fe4ae1324b757747e9e0"
  },
  {
    "url": "dev/scripts/index.html",
    "revision": "615bc92c5555f69d2e580899bba06f14"
  },
  {
    "url": "dev/scripts/meta-tags.html",
    "revision": "df256d692b477549cf60c662baf13f68"
  },
  {
    "url": "dev/testing/index.html",
    "revision": "964efc07e30e3c0466b7a33f2fb8d6f5"
  },
  {
    "url": "dev/testing/testing.html",
    "revision": "2355f913fb9216a3bd7616fd2632d375"
  },
  {
    "url": "favicon.png",
    "revision": "b9e77a662870084abc1bba028ca07a1f"
  },
  {
    "url": "icon.png",
    "revision": "091f63647a47858eb91d3f0fb23aebc2"
  },
  {
    "url": "index.html",
    "revision": "859260e14eeb082f62462e877bf837f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
