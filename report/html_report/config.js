report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Header_tag_1024px.png",
        "test": "../bitmaps_test/20220330-165934/Header_tag_1024px.png",
        "selector": "header",
        "fileName": "Header_tag_1024px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -16,
            "height": 0
          },
          "misMatchPercentage": "13.58",
          "analysisTime": 46
        },
        "diffImage": "../bitmaps_test/20220330-165934/failed_diff_Header_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Header_tag_1200px.png",
        "test": "../bitmaps_test/20220330-165934/Header_tag_1200px.png",
        "selector": "header",
        "fileName": "Header_tag_1200px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 16,
            "height": 0
          },
          "misMatchPercentage": "12.18",
          "analysisTime": 28
        },
        "diffImage": "../bitmaps_test/20220330-165934/failed_diff_Header_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Nav_tag_1024px.png",
        "test": "../bitmaps_test/20220330-165934/Nav_tag_1024px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1024px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -121,
            "height": 0
          },
          "misMatchPercentage": "12.32",
          "analysisTime": 48
        },
        "diffImage": "../bitmaps_test/20220330-165934/failed_diff_Nav_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Nav_tag_1200px.png",
        "test": "../bitmaps_test/20220330-165934/Nav_tag_1200px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1200px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -121,
            "height": 0
          },
          "misMatchPercentage": "12.32",
          "analysisTime": 41
        },
        "diffImage": "../bitmaps_test/20220330-165934/failed_diff_Nav_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover_1024px.png",
        "test": "../bitmaps_test/20220330-165934/Link_with_data-qa_hover_1024px.png",
        "selector": "[data-qa=\"hover\"]",
        "fileName": "Link_with_data-qa_hover_1024px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1024px",
        "engineErrorMsg": "waiting for selector \"[data-qa=\"hover\"]\" failed: timeout 30000ms exceeded",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -69,
            "height": -120
          },
          "misMatchPercentage": "23.36",
          "analysisTime": 32
        },
        "diffImage": "../bitmaps_test/20220330-165934/failed_diff_Link_with_data-qa_hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover_1200px.png",
        "test": "../bitmaps_test/20220330-165934/Link_with_data-qa_hover_1200px.png",
        "selector": "[data-qa=\"hover\"]",
        "fileName": "Link_with_data-qa_hover_1200px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1200px",
        "engineErrorMsg": "waiting for selector \"[data-qa=\"hover\"]\" failed: timeout 30000ms exceeded",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -69,
            "height": -120
          },
          "misMatchPercentage": "23.36",
          "analysisTime": 23
        },
        "diffImage": "../bitmaps_test/20220330-165934/failed_diff_Link_with_data-qa_hover_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_class_is-active_1024px.png",
        "test": "../bitmaps_test/20220330-165934/Link_with_class_is-active_1024px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1024px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -20,
            "height": 26
          },
          "misMatchPercentage": "9.91",
          "analysisTime": 4
        },
        "diffImage": "../bitmaps_test/20220330-165934/failed_diff_Link_with_class_is-active_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_class_is-active_1200px.png",
        "test": "../bitmaps_test/20220330-165934/Link_with_class_is-active_1200px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1200px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/moyo-header/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -20,
            "height": 26
          },
          "misMatchPercentage": "9.91",
          "analysisTime": 3
        },
        "diffImage": "../bitmaps_test/20220330-165934/failed_diff_Link_with_class_is-active_1200px.png"
      },
      "status": "fail"
    }
  ]
});