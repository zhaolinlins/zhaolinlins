'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "db40952a6e0e01508d8534d677a03bd3",
"/": "db40952a6e0e01508d8534d677a03bd3",
"main.dart.js": "3e5f742da3be17d479febcc020330673",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "45e0b603f1fbee9d2b0d2ecf2a223e8d",
"assets/AssetManifest.json": "556068e9132d8473178f16fb14b7f3f3",
"assets/NOTICES": "7b1faee3e97f087aa695e6b5ea164b0b",
"assets/FontManifest.json": "d6e90fbb27a88b974ab9b212c7c7518c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/images/state_invalid.png": "1b594c60db6e496d71e86fd8dcdbb4d0",
"assets/assets/images/brilliant_chapters.png": "4b789f8fac45b6ecda617fb245f3c560",
"assets/assets/images/book.png": "2494d65edcefa015e49ae3fb8f4ef9c0",
"assets/assets/images/icon_history.png": "9d18a4eee57d131656101c69a7f0d1f4",
"assets/assets/images/ic_into.png": "aa14ec3fcce1c9cb10c89274201439c2",
"assets/assets/images/icon_about_me.png": "244a9fa9ca492ff0764699f9ee2e6171",
"assets/assets/images/rectangle_list.png": "9949f224461a22fd4099e26d9cc50561",
"assets/assets/images/2.0x/state_invalid.png": "d875647e5e6fa5b277f4e9f1b484ddef",
"assets/assets/images/2.0x/brilliant_chapters.png": "13d457bf5543b503f8cbcca058cfe528",
"assets/assets/images/2.0x/book.png": "341ce865f8adc64930ce996ed3e150da",
"assets/assets/images/2.0x/icon_history.png": "659c826345c1c1660ee3ffbd9bcf63f5",
"assets/assets/images/2.0x/ic_into.png": "4f808326a34915a663deb8dd81fa507d",
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
"assets/assets/images/3.0x/ic_into.png": "e01361cd2caad755b121e8a22bd52b1b",
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
