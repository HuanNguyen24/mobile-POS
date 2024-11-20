'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "31fb1dfc5f4bf008a8df265f2b3d3182",
"version.json": "06a1a3fcd309acfc421fdb86d1e30225",
"index.html": "f834058f8924757687acf5acff9bed7d",
"/": "f834058f8924757687acf5acff9bed7d",
"main.dart.js": "57d34d9d96bf833edea07667c3eeb981",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c4d1eeff5d985fb0c10bef2553f2d23c",
".git/config": "e77d2086c2fc9456c74bde5cb3076d4b",
".git/objects/0c/e4ee31532f41f9ab92ef547eb3b0ae995b84d0": "14b297894e77c9217463bcdd4ab79486",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/04/0eafd0ccedd37946e36b4fa22e97692906660c": "6193fa21f69b532c491ef65e6d747706",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/94/90bec1dcae9a9b5d60f8e9bf98fc5e9baeb273": "e3f636c6227a31bab16c466cea152222",
".git/objects/60/c204509fa49f4a5b8f7d4673b55c9c14ab1eea": "0cfdec87c16ec222f795ce806a8937f7",
".git/objects/34/84451d3da41c58d618d333d8096b6bb74fb856": "435855f97bf8666b65f0c966ff66b59e",
".git/objects/5a/d5308007b433248ed804f3cbc84120859d072f": "c71d38e75b0ba5a37b2c2b8749b4d60f",
".git/objects/b5/c6ca710c937527ca8d2d344214243d6db33832": "1e6ca9406fc3150067eabb10040766e1",
".git/objects/b2/4f2c1417f77f6e5cd69e873eb051fe3a0e7878": "fc86276db0fa899c574eb71114aeca07",
".git/objects/bb/85247ac9f75a896bd8a0ef17ffc8b69f5f2544": "582608006050d7b918cc1c380206f454",
".git/objects/bb/85416117b9ac4739178c3128e01479091acd65": "947c1255a71c0a94ab19b70270809b91",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/efc06742c5d6da6ef77da191539c9dd7007d4e": "83b6cd8b0e2fae5d58c5fd9ea44f6248",
".git/objects/da/515284d68229eb9a8a564a4d5a142989f3e486": "9e5062ef9f02409530c3359674e37b33",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/e688bbdb3928bf72028adc6abe233c0f00781b": "80847f1dce75223e949e95f6b6afb8fd",
".git/objects/c1/42a9ca2d0141f5f16c256dbfaedd968bb47302": "a5ca13d8ad5dcce9b3f652c582279e12",
".git/objects/ec/5711cf3352da93e8b79833b68a18a076df1807": "bcc26979218f94c3101c448fcb87cf3b",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/2c3f66e0ac481e092308bb34134a24bdb97b4b": "b029e7219a513e2c2335a9202c8b6527",
".git/objects/4c/f866a66c5eb32bf601448bd1f31746b85e4420": "48fa4f51ab3233e13352a3abf4216f10",
".git/objects/81/056ad7a32326e2e93986ace9894a9355a2027b": "5803a145a1bf968a53ca64a2dc0ed18e",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/36ccac5b26f830304c61aeb82798e2dcf970b9": "b5f78d1b850fc0baee4e316d663c618d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/5c/db1bde2df4bc89f448882301f320d817da77a8": "44558d1603f6d281963497dd1c1e1011",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/ebd3977299d315f6d853924c54653d53a4b534": "273054d2eb56f058ce98714bffe1dd3d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6c/c3510ca2d9fd4a5e3907f4086744f514a82eee": "ce79ac773d7e6510ef8bb62f17812642",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/9116a13be24bca57b05f269a27b04b69470f88": "150e1b54fc6ca55858545523436afb2e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/91ccb7c212140add6bf91da4d29c337f8e69ca": "99312b5404e68162e921827db93d159b",
".git/objects/d2/20cd1f4d41294e4423d561f56101f867a2d4b4": "8434bac3733d5df4bbbd97d1bdb233a1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/3e6e80aa027873afa18d6da610ad6f90d019f7": "dc201b0de929e84a4c821c990ab347da",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/f9/c393059341a5bc6425f18267763107c8007df8": "2601ad52e7fa5bbf5ebf5d534ef542a6",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/f6/b992944a2eeeb951bf332595a9aae8832e29bf": "26a08e51e9e6632bb9364e629a31b688",
".git/objects/e7/4a702ec58c72868f62bab22ff8ab298b9d0313": "b92f8d1abd018803e50d945c904fcd0a",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/d1a76057bcb8d720ba8b92946de4f6a1b72712": "de9fdb7cb60ab970c3825b7822dd5b99",
".git/objects/8d/bfa81d5c40598287991d73fbcc7d66dec80dff": "c418ffcc55889cf8b3a811f77c794d54",
".git/objects/8c/12ecfbab78f2c5d76367ad7caa2688c1acc5ce": "67cd3ddef908ad2d70012fc41999e9e0",
".git/objects/49/fb6decd2071c357c7cfb7edb0a6f846f553f2c": "529092fc0c253a904afee9224bfdc516",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/c5dd0465b9ca6a22903e8ac7dfe598bc3cbb8b": "8ec0bfc7466f438dd75b0bd294f63702",
".git/objects/7f/e47daaf51333c4ff203587b96d47285b9b47ed": "11c893c8a37571b72caca51112cf0742",
".git/HEAD": "cdc6e77564d392632d1d3162ecd18e1f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0852c0f62eaf666c4fab40d4b1d0ffd1",
".git/logs/refs/heads/develop": "a741495bd953e09084cd338bf613434e",
".git/logs/refs/heads/main": "0bff847e40b35ac13c5ced19062a9c18",
".git/logs/refs/remotes/origin/develop": "1d6127135f55ee878318e5d5cc4ff8eb",
".git/logs/refs/remotes/origin/main": "791bdeb299886f5e691b52679706537f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/develop": "365ef901cd1b1776c55eab1ddb4ed2ac",
".git/refs/heads/main": "365ef901cd1b1776c55eab1ddb4ed2ac",
".git/refs/remotes/origin/develop": "365ef901cd1b1776c55eab1ddb4ed2ac",
".git/refs/remotes/origin/main": "8dd49da0916fdfdd4455f8ef2bfd50ca",
".git/index": "757badc9cfbe9131911fa8c4c521cc28",
".git/COMMIT_EDITMSG": "dd1d9c7923e331467ef266246d1429b8",
".git/FETCH_HEAD": "78389d64885bd9c726182cfc1ee1edb9",
"assets/AssetManifest.json": "0290bda24cdc385c5665b752ace31444",
"assets/NOTICES": "2fe4df53fee1f5fc883e86cde325349b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "62b95994afb3db1610864d3684a2c286",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/src/fakedata/fake_user.json": "2c475109d0f30b4ae97f30bd92fecd8f",
"assets/AssetManifest.bin": "fb4da53ab2180536b460c76cab13b788",
"assets/fonts/MaterialIcons-Regular.otf": "1f4b70da340cc549d889aadafadcc609",
"assets/assets/images/staff_avatar.jpg": "342f8610f2afb4cd1f1519c7ad4f102a",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/potato.png": "5bf78ead92b30963584e71a5c53692e8",
"assets/assets/images/chicken.png": "70ab5468b4648eefbdaca2338157fa1d",
"assets/assets/images/textlogo.png": "0fee4b67dc8f01aec7698018068fc480",
"assets/assets/images/hamburger.png": "d3d8efb5f5e5869853b5a6a4d2120336",
"assets/assets/images/logo.png": "d94c0b336665ab0b641c886f1dc9bdf0",
"assets/assets/images/slider_fastfood.jpg": "4c53502e3990b111cebf488044723dd0",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
