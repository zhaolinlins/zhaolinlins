'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0fd8abc7929a568a7d5da0135e28cb0e",
"index.html": "27e6a8c2cdcb9ee65b0d218f92e61e92",
"/": "27e6a8c2cdcb9ee65b0d218f92e61e92",
"main.dart.js": "6681ecc8253daae53b086d089f860b35",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "45e0b603f1fbee9d2b0d2ecf2a223e8d",
"assets/AssetManifest.json": "4de4a87e5b40169a44195ae42ba7363f",
"assets/NOTICES": "faecf2838dfa3b3fa8ca0f9febff8dda",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/dokit/images/3.0x/dk_source_code.png": "518075bf484df6921172463a832d37e4",
"assets/packages/dokit/images/3.0x/dk_view_check.png": "e305ba6738b7fd2f8c7c94cdccc36e48",
"assets/packages/dokit/images/3.0x/dk_channel_check_h.png": "ab49b89ace97e09855b26ec13119df34",
"assets/packages/dokit/images/3.0x/dk_frame_hist.png": "87072f67d54b6f5257efc67edf27699c",
"assets/packages/dokit/images/3.0x/dk_log_info.png": "9cf47ea418ed586959efa30635135cbc",
"assets/packages/dokit/images/3.0x/dokit_ic_close.png": "412d4d2b28545902a98035e6483a0f83",
"assets/packages/dokit/images/3.0x/dk_route_arrow.png": "387b987a3cc86f6c0ca0de9361de828d",
"assets/packages/dokit/images/3.0x/dk_channel_check_n.png": "6424a1a7825f433d8c24456bad68d5a1",
"assets/packages/dokit/images/3.0x/dk_time_counter.png": "f0baa380b061036792442bbda86d9087",
"assets/packages/dokit/images/3.0x/dk_ram.png": "b2b9a1025167a348243ce13709508bc0",
"assets/packages/dokit/images/3.0x/dk_sys_info.png": "c1550ee142d50ea93697fb0e93395627",
"assets/packages/dokit/images/3.0x/dk_color_pick.png": "5bd0e88ea16c7c018d0b411e02448897",
"assets/packages/dokit/images/3.0x/dk_net_monitor.png": "2638a4806cc13cdb1c712f5a8d9eafaf",
"assets/packages/dokit/images/3.0x/dk_channel_expand_h.png": "e5de31197b722bb621341dc25379c484",
"assets/packages/dokit/images/3.0x/dk_memory_search.png": "b99196177c4717c71a0f3394c43cfef0",
"assets/packages/dokit/images/3.0x/dk_method_channel.png": "1fa668c9de0ade636427256655c54ab4",
"assets/packages/dokit/images/3.0x/dk_channel_expand_n.png": "2e1d7ee629eca06249d41355195344e4",
"assets/packages/dokit/images/3.0x/dokit_flutter_btn.png": "23638fffe642ac6e9ba83a981af93e86",
"assets/packages/dokit/images/3.0x/dk_view_route.png": "8e2575ab9ed773e50e96880c8624a845",
"assets/packages/dokit/images/3.0x/dk_fps_chart.png": "d37aa0b512f0725d6faf20bcd1e2f85f",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/state_invalid.png": "1b594c60db6e496d71e86fd8dcdbb4d0",
"assets/assets/images/brilliant_chapters.png": "4b789f8fac45b6ecda617fb245f3c560",
"assets/assets/images/book.png": "2494d65edcefa015e49ae3fb8f4ef9c0",
"assets/assets/images/icon_history.png": "9d18a4eee57d131656101c69a7f0d1f4",
"assets/assets/images/icon_about_me.png": "244a9fa9ca492ff0764699f9ee2e6171",
"assets/assets/images/rectangle_list.png": "9949f224461a22fd4099e26d9cc50561",
"assets/assets/images/2.0x/state_invalid.png": "d875647e5e6fa5b277f4e9f1b484ddef",
"assets/assets/images/2.0x/brilliant_chapters.png": "13d457bf5543b503f8cbcca058cfe528",
"assets/assets/images/2.0x/book.png": "341ce865f8adc64930ce996ed3e150da",
"assets/assets/images/2.0x/icon_history.png": "659c826345c1c1660ee3ffbd9bcf63f5",
"assets/assets/images/2.0x/icon_about_me.png": "77043208ed186aa302bc6e23abb1ed4b",
"assets/assets/images/2.0x/rectangle_list.png": "9dcfc33b619a4ae24efad25e85d7a9ff",
"assets/assets/images/2.0x/icon_error_t.png": "6e530a7b1b3780db0f926f081394fe52",
"assets/assets/images/2.0x/icon_line_chat.png": "d519a8543e722671a029ff0f939fb5aa",
"assets/assets/images/2.0x/home_course_icon.png": "2fa9c47abd61bed1165cf3a6229773ee",
"assets/assets/images/2.0x/ic_mine_set.png": "8f92e367b23e6553bbdfaed34909a384",
"assets/assets/images/2.0x/home_image.png": "7195f56f2ad24e3489386d2031053de7",
"assets/assets/images/2.0x/calendar_arrow.png": "93cd875c5ab85174fd8fd17655d9f5f5",
"assets/assets/images/2.0x/ic_start_yellow.png": "5146defff24fdc415750b1b87c0846ac",
"assets/assets/images/2.0x/ic_do_t.png": "a46fe1e071c8ee1211f97a683d1dff88",
"assets/assets/images/2.0x/mine_info_bg.png": "d5abe1ed3e6eb2256a6957566d9e72dd",
"assets/assets/images/2.0x/home_calendar_icon.png": "16249b7af55f31cf831de73270cd8b32",
"assets/assets/images/2.0x/ic_collection_bg.png": "7b1f81f204457bc643247f4cf1fcb4ef",
"assets/assets/images/2.0x/ic_mine_collection.png": "aa3febce0bbda5515485892e617f55d2",
"assets/assets/images/2.0x/tap_buttom_bar.png": "dcc7617796ebb299ff118ff9d2fe60b5",
"assets/assets/images/2.0x/ic_start_gray.png": "b59e870dc8dd31ae668c7f84da29eeb7",
"assets/assets/images/2.0x/icon_collection.png": "a886c2ba0635c262ccadfc151c39e71a",
"assets/assets/images/2.0x/icon_avatar.png": "5614f64d16b3f3eea4a7e8b039e5f11c",
"assets/assets/images/2.0x/home_signin_icon.png": "36314579c7ebe138bfb04a438e84bfeb",
"assets/assets/images/2.0x/home_exercise_icon.png": "5b4950883d09e2b960a11e7046933ee3",
"assets/assets/images/2.0x/home_test_icon.png": "15212043ce18500601a660b842db323a",
"assets/assets/images/2.0x/ic_head.png": "e67c363d65a5bf3eda1191fdbc82e06e",
"assets/assets/images/2.0x/mock_test.png": "a88b537edc402aba0a972b10ceb6e068",
"assets/assets/images/icon_error_t.png": "d11c49bf297ff56f7645635c7977f489",
"assets/assets/images/icon_line_chat.png": "5dd47d256c994dd3bf7691f9729ae51c",
"assets/assets/images/home_course_icon.png": "2fa9c47abd61bed1165cf3a6229773ee",
"assets/assets/images/ic_mine_set.png": "95061b751182bfb59f0ce825262021dd",
"assets/assets/images/home_image.png": "7195f56f2ad24e3489386d2031053de7",
"assets/assets/images/calendar_arrow.png": "f66caefe6730bed2c505d692fd82b084",
"assets/assets/images/ic_start_yellow.png": "923b9c5249322eb257609c395bafc25b",
"assets/assets/images/3.0x/state_invalid.png": "828aa7405866479ebe7a04e691cc7271",
"assets/assets/images/3.0x/brilliant_chapters.png": "aec64e792e461a9ab8e851b45e6a9534",
"assets/assets/images/3.0x/book.png": "85dcb5b50d2e46373bea5764c66212c6",
"assets/assets/images/3.0x/icon_history.png": "e4ba9ad385471427b6a291f6b889bdb5",
"assets/assets/images/3.0x/icon_about_me.png": "65391a914d138d1b164a2f63b90cd1c6",
"assets/assets/images/3.0x/rectangle_list.png": "a731bcf3c6e72e766cbd71ef70f64c98",
"assets/assets/images/3.0x/icon_error_t.png": "7176c41b503bad1723e6fa2d5f782423",
"assets/assets/images/3.0x/icon_line_chat.png": "c544547b44a4f3aeb4da6c57136cf0fa",
"assets/assets/images/3.0x/home_course_icon.png": "3c4214b7ee67aa6a682c11289c17bb3b",
"assets/assets/images/3.0x/ic_mine_set.png": "41773010c5bc0474948da36ad6bfa68b",
"assets/assets/images/3.0x/home_image.png": "c9f8d38a4f4962eff19653e6e30f6c3f",
"assets/assets/images/3.0x/calendar_arrow.png": "500e801a89968d5be3a941059f0db8ad",
"assets/assets/images/3.0x/ic_start_yellow.png": "ae496d94b566c836c83ec62a4b87a5aa",
"assets/assets/images/3.0x/ic_do_t.png": "bbe9c19afbd3c8f75a863cc47dc0c7e8",
"assets/assets/images/3.0x/mine_info_bg.png": "207d258fcaf1dfb8e5fd90eb56cf992d",
"assets/assets/images/3.0x/home_calendar_icon.png": "2c87424ccb7165f910de59a3541f0c62",
"assets/assets/images/3.0x/ic_collection_bg.png": "a6e8fce14d62a3a196e52641b27d2014",
"assets/assets/images/3.0x/ic_mine_collection.png": "5790b05cca09688a843c5d67f8b43c9d",
"assets/assets/images/3.0x/tap_buttom_bar.png": "252dfda17be81d9255ecbe4a53fe9481",
"assets/assets/images/3.0x/ic_start_gray.png": "ced89be9450a852622e5ca556d110392",
"assets/assets/images/3.0x/icon_collection.png": "99c57901e94d1c254efa11037e90005f",
"assets/assets/images/3.0x/icon_avatar.png": "f612e099b51cce6107678d5411caf7da",
"assets/assets/images/3.0x/home_signin_icon.png": "35b0455e70a8a7667d13385c3b6bfdfa",
"assets/assets/images/3.0x/home_exercise_icon.png": "ef51da3937c1ba1bc0b07d1a9a82ac0e",
"assets/assets/images/3.0x/home_test_icon.png": "7c7ecd5255cbf3b495ca8eb50281a334",
"assets/assets/images/3.0x/ic_head.png": "09d304e2296b416ea283819d9d90fae3",
"assets/assets/images/3.0x/mock_test.png": "5743a13c9e727d1035e7c1032dbd23a8",
"assets/assets/images/ic_do_t.png": "fb658f22e9426fcc68072c0ff14c05d6",
"assets/assets/images/mine_info_bg.png": "d5abe1ed3e6eb2256a6957566d9e72dd",
"assets/assets/images/home_calendar_icon.png": "16249b7af55f31cf831de73270cd8b32",
"assets/assets/images/ic_collection_bg.png": "7f5fe57192ea3314eb07972defaedfae",
"assets/assets/images/ic_mine_collection.png": "79eb5dd22aaba8498c2599cf0ad693e0",
"assets/assets/images/tap_buttom_bar.png": "782e98655f181326ee7a5fa24dae85f4",
"assets/assets/images/ic_start_gray.png": "aec8f552a8f8b52135755d60449524b6",
"assets/assets/images/icon_collection.png": "137163267733c650be2f0a3e56030f70",
"assets/assets/images/icon_avatar.png": "2b5ceb665b73504999c9c1bacbf6e624",
"assets/assets/images/home_signin_icon.png": "36314579c7ebe138bfb04a438e84bfeb",
"assets/assets/images/home_exercise_icon.png": "5b4950883d09e2b960a11e7046933ee3",
"assets/assets/images/home_test_icon.png": "15212043ce18500601a660b842db323a",
"assets/assets/images/ic_head.png": "c220340b6f46dc1f43477ed732fe4e78",
"assets/assets/images/mock_test.png": "f488f5094edef6497b252b6a300a9394",
"assets/assets/data/china.json": "981508d9619356a8deca0aa642792c51"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
