module.exports = {
    schema: {
            "botId": "57dbdec1501efdd6b509cf1d",
            "description": "MH Live v4 - Only Responds to Postbacks",
            "version" : "4.0",
            "initialNode": "ENTER",
            "persistentMenu": "PERSISTENT_MENU",
            "getStarted": "GET_STARTED",
            "greetingText": "GREETING_TEXT",
            "fallbackOptions" : [
                "none"
            ],
            "keywords": {
            },
            "nodes": {
                "PERSISTENT_MENU" : {
                    "type": "basic",
                    "label": "",
                    "messages": {
                        "data": {},
                        "actions": [
                            {
                                "type": "button",
                                "label": "Home",
                                "nextNodes" : [
                                    "HOME"
                                ]
                            },
                            {
                                "type": "button",
                                "label": "Share with Friends",
                                "nextNodes": [
                                    "SHARE"
                                ]
                            },
                            {
                                "type": "button",
                                "label": "How to Use",
                                "nextNodes": [
                                    "HELP"
                                ]
                            },
                            {
                                "type": "button",
                                "label": "Manage Subscriptions",
                                "nextNodes": [
                                    "MANAGE_SUBSCRIPTIONS"
                                ]
                            }
                        ]
                    }
                },
                    "GREETING_TEXT": {
                        "type": "basic",
                        "label": "Greeting",
                        "messages": {
                            "data": {
                                "type": "text",
                                "value": {
                                    "title": "Hi {{user_first_name}}! Welcome to Macadamia Hair."
                                }
                            },
                            "actions": [
                                {
                                    "type": "button",
                                    "label": "Get Started",
                                    "nextNodes" : [
                                        "ENTER"
                                    ]
                                }
                            ]
                        }
                    },
                "GET_STARTED": {
                    "type": "basic",
                    "label": "Get Started",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "Hi {{user_first_name}}! Welcome to Macadamia Hair."
                            },
                            "subtitle": "You are signed up to receive periodic updates."
                        },
                        "actions": [
                            {
                                "type": "button",
                                "label": "Get Started",
                                "nextNodes" : [
                                    "ENTER"
                                ]
                            }
                        ]
                    }
                },
                "OPTION_NOT_AVAILABLE": {
                    "type": "basic",
                    "label": "option not available",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "This option is currently not available."
                            }
                        }
                    }
                },
                "HELP": {
                    "type": "basic",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "Here are some tips to get the most out of your experience.\n\nMost items have buttons you can click on for faster navigation.\n\nIf there are multiple items shown swipe to see more.\n\nClick ≡ in bottom left for your quick menu options."
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Home"
                                ],
                                "nextNodes": [
                                    "HOME"
                                ]
                            }
                        ]
                    }
                },
                "ENTER": {
                    "type": "basic",
                    "description": "Enter Node",
                    "onEntryPlugins": [
                        {
                            "name": "subscription",
                            "method": "subscribe",
                            "params" : {
                                "subscriptionName": "SocialUpdates"
                            }
                        }
                    ],
                    "messages": {
                        "data": {
                            "type": "gallery",
                            "value": {
                                "items": [
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/homepage_landscape_slide_cropped.jpg",
                                            "title": "Hi {{profile.firstName}}! Welcome to Macadamia Hair.",
                                            "subtitle": "You are signed up to receive periodic updates."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Enter",
                                                "nextNodes" : [
                                                    "HOME"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "How To Use",
                                                "nextNodes": [
                                                    "HELP"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }   
                },
                "SHARE": {
                    "type": "basic",
                    "description": "Share Node",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/homepage_landscape_slide_cropped.jpg",
                                            "click_url": "http://m.me/macadamiahair",
                                            "title": "Check out Macadamia Hair bot!",
                                            "subtitle": "Get latest hair care and styling tips."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Try It Out",
                                                "url" : "http://m.me/macadamiahair"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "HOME": {
                    "type": "basic",
                    "description": "Home Menu Gallery",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "description": "Tips",
                                        "type": "image",
                                        "value" : {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/Natural-Oil-Photo_cropped.png",
                                            "title": "Tips",
                                            "subtitle": "Get Hair Care Tips"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Hair Profiler",
                                                "nextNodes" : [
                                                    "HAIR_PROFILER"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "Get The Look",
                                                "nextNodes": [
                                                    "LOOKS_GALLERY"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "Avoid The Frizz",
                                                "nextNodes": [
                                                    "SIGNUP_AVOID_FRIZZ_SUB"
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/Nourishing-Photo_cropped.jpg",
                                            "title": "Collections",
                                            "subtitle": "Care and treatment"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Weightless Moisture",
                                                "nextNodes" : [
                                                    "WEIGHTLESS"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "Nourishing Moisture",
                                                "nextNodes": [
                                                    "NOURISHING"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "Ultra Rich Moisture",
                                                "nextNodes": [
                                                    "ULTRA_RICH"
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/Styling-Photo_cropped.jpg",
                                            "title": "Additional Products",
                                            "subtitle": "Styling"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Styling",
                                                "url" : "http://macadamiahair.com/styling.html"
                                            },
                                            {
                                                "type": "button",
                                                "label" : "Natural Oil",
                                                "url": "http://macadamiahair.com/care-and-treatment/natural-oil.html"
                                            },
                                            {
                                                "type" : "button",
                                                "label": "Accessories",
                                                "url": "http://macadamiahair.com/styling/accessories.html"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/Ultra-Rich-Photo_cropped.jpg",
                                            "title": "Social",
                                            "subtitle": "Latest News"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "In The News",
                                                "url" : "http://macadamiahair.com/in-the-news/"
                                            },
                                            {
                                                "type": "button",
                                                "label" : "Instagram",
                                                "url": "https://www.instagram.com/macadamiahair/"
                                            },
                                            {
                                                "type" : "button",
                                                "label": "Twitter",
                                                "url": "https://twitter.com/macadamiahair"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/Natural-Oil-Photo-1_cropped.jpg",
                                            "title": "About Us",
                                            "subtitle": "Our Vision"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Macadamia Story",
                                                "url" : "http://macadamiahair.com/our-story/"
                                            },
                                            {
                                                "type": "button",
                                                "label" : "Creative Vision",
                                                "url": "http://macadamiahair.com/creative-vision/"
                                            },
                                            {
                                                "type" : "button",
                                                "label": "Artistic Team",
                                                "url": "http://macadamiahair.com/artistic-team/"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/Weightless-Photo_cropped.jpg",
                                            "title": "Support",
                                            "subtitle": "Help"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Contact Us",
                                                "url" : "http://macadamiahair.com/contacts"
                                            },
                                            {
                                                "type": "button",
                                                "label" : "Customer Service",
                                                "url": "http://macadamiahair.com/customer-service/"
                                            },
                                            {
                                                "type" : "button",
                                                "label": "Manage Subscriptions",
                                                "nextNodes": [
                                                    "MANAGE_SUBSCRIPTIONS"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "LOOKS_GALLERY": {
                    "type": "basic",
                    "description": "Looks Gallery",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "id": "1",
                                        "type": "image",
                                        "value" : {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/naomi-oscars.jpg",
                                            "title": "Naomi's Oscar Look"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Get The Look",
                                                "url" : "http://macadamiahair.com/get-the-look/naomi-s-oscar-look"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "2",
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/natalie_1.jpg",
                                            "title": "Natalie's SAG Awards Look"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Get The Look",
                                                "url" : "http://macadamiahair.com/get-the-look/nataliea-s-sag-awards-look"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "3",
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/chrissy-grammy.jpg",
                                            "title": "Chrissy's Grammy Look"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Get The Look",
                                                "url" : "http://macadamiahair.com/get-the-look/chrissy-s-grammy-look"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "4",
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/naomi-globes.jpg",
                                            "title": "Naomi's Golden Globe Look"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Get The Look",
                                                "url" : "http://macadamiahair.com/get-the-look/naomi-s-golden-globe-look"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "WEIGHTLESS": {
                    "type": "basic",
                    "messages": {
                        "data": {
                            "type": "gallery",
                            "value": {
                                "items": [
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_shampoo.jpg",
                                            "title": "Shampoo",
                                            "subtitle": "Helps cleanse hair while promoting lift, body and volume."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/weightless-moisture/weightless-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_conditioner.jpg",
                                            "title": "Conditioner",
                                            "subtitle": "Addresses the needs of finer hair textures by boosting body and volume."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/weightless-moisture/weightless-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_masque.jpg",
                                            "title": "Masque",
                                            "subtitle": "Hair masque that nourishes, conditions and strengthens baby fine to fine hair."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/weightless-moisture/weightless-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_condition_mist.jpg",
                                            "title": "Conditioning Mist",
                                            "subtitle": "Lightweight hydrating mist that detangles and helps prevent damage and breakage."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/weightless-moisture/weightless-moisture-conditioning-mist.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_dry_oil_mist.jpg",
                                            "title": "Dry Oil Micro Mist",
                                            "subtitle": "Ultra lightweight oil that provides vital nutrients and frizz control."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/weightless-moisture/weightless-moisture-dry-oil-micro-mist.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "NOURISHING": {
                    "type": "basic",
                    "messages": {
                        "data": {
                            "type": "gallery",
                            "value": {
                                "items": [
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_shampoo.jpg",
                                            "title": "Shampoo",
                                            "subtitle": "Rehydrates, cleanses and rebalances damaged hair while protecting color."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_conditioner.jpg",
                                            "title": "Conditioner",
                                            "subtitle": "Promotes healthy hair by replenishing and moisturizing hair and scalp."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_masque.jpg",
                                            "title": "Masque",
                                            "subtitle": "Hair masque that helps gain ultra hydration while detangling and reducing frizz."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_oil_treatment.jpg",
                                            "title": "Oil Treatment",
                                            "subtitle": "Oil treatment that hydrates, provides UV protection and repairs damaged hair."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-oil-treatment.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_oil_spray.jpg",
                                            "title": "Oil Spray",
                                            "subtitle": "Reduces blow-dry time and infuses moisture, softness, protection and shine."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-oil-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "ULTRA_RICH": {
                    "type": "basic",
                    "messages": {
                        "data": {
                            "type": "gallery",
                            "value": {
                                "items": [
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_shampoo.jpg",
                                            "title": "Shampoo",
                                            "subtitle": "Smoothes and cleanses hair while offering superior hydration and nourishment."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/ultra-rich-moisture/ultra-rich-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_conditioner.jpg",
                                            "title": "Conditioner",
                                            "subtitle": "Intensely moisturizes, improves elasticity and helps prevent frizz and breakage."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/ultra-rich-moisture/ultra-rich-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_masque.jpg",
                                            "title": "Masque",
                                            "subtitle": "Provides hair with lipids essential for hydration and hair repair."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/ultra-rich-moisture/ultra-rich-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_cleansing_conditioner.jpg",
                                            "title": "Cleansing Conditioner",
                                            "subtitle": "Gently cleanses and conditions hair while replenishing moisture back into hair."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/ultra-rich-moisture/ultra-rich-moisture-cleansing-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_oil_treatment.jpg",
                                            "title": "Oil Treatment",
                                            "subtitle": "Absorbs into damaged or thirsty hair to protect against breakage and split ends."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/ultra-rich-moisture/ultra-rich-moisture-oil-treatment.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "AVOID_THE_FRIZZ": {
                    "type": "input",
                    "label": "locationInput",
                    "messages": {
                        "data" : {
                            "type": "text",
                            "value": {
                                "title" : "Get weather alerts to protect your hair."
                            }
                        }
                    }
                },
                "ASK_FOR_LOCATION": {
                    "type": "input",
                    "label": "locationInput",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "Please send your location or type your zip code."
                            }
                        },
                        "actions": [
                            {
                                "id": "shareLocation",
                                "type": "quicktext",
                                "label" : [
                                    "shareLocation"
                                ],
                                "nextNodes": [
                                    "CHECK_LOCATION"
                                ]
                            }
                        ]
                    },
                    "nextNodes": [
                        "CHECK_LOCATION"
                    ]
                },
                "CHECK_LOCATION": {
                    "type": "basic",
                    "onEntryPlugins" : [
                        {
                            "name": "location",
                            "method": "lookupUserLocation",
                            "params" : {
                                "location": "{{data.userInput.locationInput}}"
                            }
                        }
                    ],
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "We have stored your location as {{profile.location.city}}, {{profile.location.state}}, {{profile.location.country}}.  Is this correct?"
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Yes"
                                ],
                                "nextNodes": [
                                    "LOCATION_CONFIRMED",
                                    "SUBSCRIBE_AVOID_FRIZZ"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "No"
                                ],
                                "nextNodes": [
                                    "WRONG_ADDRESS",
                                    "ASK_FOR_LOCATION"
                                ]
                            }
                        ]
                    }
                },
                "LOCATION_CONFIRMED": {
                    "type": "basic",
                    "label": "Location Confirmed",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "Thanks for confirming your location."
                            }
                        }
                    }
                },
                "WRONG_ADDRESS": {
                    "type": "basic",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "Sorry we got that wrong."
                            }
                        }
                    }
                },
                "SUBSCRIBE_AVOID_FRIZZ": {
                    "type": "basic",
                    "messages": [
                        {
                            "data": {
                                "type": "text",
                                "dynamic": {
                                    "name": "subscription",
                                    "method": "subscribe",
                                    "params" : {
                                        "subscriptionName": "AvoidFrizz"
                                    }
                                }
                            },
                            "actions" : [
                                {
                                    "type": "quicktext",
                                    "label": [
                                        "Home"
                                    ],
                                    "nextNodes": [
                                        "HOME"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "UNSUBSCRIBE_AVOID_FRIZZ": {
                    "type": "basic",
                    "messages" : [
                        {
                            "data": {
                                "type": "text",
                                "dynamic": {
                                    "name": "subscription",
                                    "method": "unsubscribe",
                                    "params" : {
                                        "subscriptionName": "AvoidFrizz"
                                    }
                                }
                            },
                            "actions" : [
                                {
                                    "type": "quicktext",
                                    "label": [
                                        "Home"
                                    ],
                                    "nextNodes": [
                                        "HOME"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "SIGNUP_AVOID_FRIZZ_SUB": {
                    "type": "conditional",
                    "onEntryPlugins" : [
                        {
                            "name": "subscription",
                            "method": "check",
                            "params" : {
                                "subscriptionName": "AvoidFrizz"
                            }
                        }
                    ],
                    "expression": "{{data.apiResults.subscription_AvoidFrizz.data}}",
                    "conditions": [
                        {
                            "case": "true",
                            "nextNodes": [
                                "MANAGE_AVOID_FRIZZ_SUB_SUBSCRIBED"
                            ]
                        },
                        {
                            "case": "false",
                            "nextNodes": [
                                "AVOID_THE_FRIZZ",
                                "ASK_FOR_LOCATION"
                            ]
                        }
                    ]
                },
                "MANAGE_AVOID_FRIZZ_SUB": {
                    "type": "conditional",
                    "onEntryPlugins" : [
                        {
                            "name": "subscription",
                            "method": "check",
                            "params" : {
                                "subscriptionName": "AvoidFrizz"
                            }
                        }
                    ],
                    "expression": "{{data.apiResults.subscription_AvoidFrizz.data}}",
                    "conditions": [
                        {
                            "case": "true",
                            "nextNodes": [
                                "MANAGE_AVOID_FRIZZ_SUB_SUBSCRIBED"
                            ]
                        },
                        {
                            "case": "false",
                            "nextNodes": [
                                "MANAGE_AVOID_FRIZZ_SUB_NOT_SUBSCRIBED"
                            ]
                        }
                    ]
                },
                "MANAGE_AVOID_FRIZZ_SUB_SUBSCRIBED": {
                    "type": "basic",
                    "messages" : {
                        "data": {
                            "type": "gallery",
                            "value" : {
                                "items": [
                                    {
                                        "type": "text",
                                        "value": {
                                            "title": "Avoid The Frizz"
                                        },
                                        "subtitle": "Weather alerts to protect your hair.",
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Update Location",
                                                "nextNodes" : [
                                                    "ASK_FOR_LOCATION"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "Unsubscribe",
                                                "nextNodes": [
                                                    "UNSUBSCRIBE_AVOID_FRIZZ"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "Home",
                                                "nextNodes": [
                                                    "HOME"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "MANAGE_AVOID_FRIZZ_SUB_NOT_SUBSCRIBED": {
                    "type": "basic",
                    "messages": {
                        "data": {
                            "type": "gallery",
                            "value": {
                                "items": [
                                    {
                                        "type": "text",
                                        "value": {
                                            "title": "Avoid The Frizz"
                                        },
                                        "subtitle": "Weather alerts to protect your hair.",
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Subscribe",
                                                "nextNodes" : [
                                                    "AVOID_THE_FRIZZ",
                                                    "ASK_FOR_LOCATION"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "Home",
                                                "nextNodes": [
                                                    "HOME"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "MANAGE_SOCIAL_UPDATES_SUB": {
                    "type": "conditional",
                    "onEntryPlugins": [
                        {
                            "name": "subscription",
                            "method": "check",
                            "params" : {
                                "subscriptionName": "SocialUpdates"
                            }
                        }
                    ],
                    "expression": "{{data.apiResults.subscription_SocialUpdates.data}}",
                    "conditions": [
                        {
                            "case": "true",
                            "nextNodes": [
                                "MANAGE_SOCIAL_UPDATES_SUB_SUBSCRIBED"
                            ]
                        },
                        {
                            "case": "false",
                            "nextNodes": [
                                "MANAGE_SOCIAL_UPDATES_SUB_NOT_SUBSCRIBED"
                            ]
                        }
                    ]
                },
                "MANAGE_SOCIAL_UPDATES_SUB_SUBSCRIBED": {
                    "type": "basic",
                    "messages" : {
                        "data": {
                            "type": "gallery",
                            "value" : {
                                "items": [
                                    {
                                        "type": "text",
                                        "value": {
                                            "title": "Social Updates - Manage Sub"
                                        },
                                        "subtitle": "Periodic social updates.",
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Unsubscribe",
                                                "nextNodes" : [
                                                    "UNSUBSCRIBE_SOCIAL_UPDATES"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "Home",
                                                "nextNodes": [
                                                    "HOME"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "MANAGE_SOCIAL_UPDATES_SUB_NOT_SUBSCRIBED": {
                    "type": "basic",
                    "messages": {
                        "data": {
                            "type": "gallery",
                            "value": {
                                "items": [
                                    {
                                        "type": "text",
                                        "value": {
                                            "title": "Social Updates - Manage Sub"
                                        },
                                        "subtitle": "Periodic social updates.",
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Subscribe",
                                                "nextNodes" : [
                                                    "SUBSCRIBE_SOCIAL_UPDATES"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "Home",
                                                "nextNodes": [
                                                    "HOME"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "SUBSCRIBE_SOCIAL_UPDATES": {
                    "type": "basic",
                    "messages": [
                        {
                            "data": {
                                "type": "text",
                                "dynamic": {
                                    "name": "subscription",
                                    "method": "subscribe",
                                    "params" : {
                                        "subscriptionName": "SocialUpdates"
                                    }
                                }
                            },
                            "actions" : [
                                {
                                    "type": "quicktext",
                                    "label": [
                                        "Home"
                                    ],
                                    "nextNodes": [
                                        "HOME"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "UNSUBSCRIBE_SOCIAL_UPDATES": {
                    "type": "basic",
                    "messages" : [
                        {
                            "data": {
                                "type": "text",
                                "dynamic": {
                                    "name": "subscription",
                                    "method": "unsubscribe",
                                    "params" : {
                                        "subscriptionName": "SocialUpdates"
                                    }
                                }
                            },
                            "actions" : [
                                {
                                    "type": "quicktext",
                                    "label": [
                                        "Home"
                                    ],
                                    "nextNodes": [
                                        "HOME"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "MANAGE_SUBSCRIPTIONS": {
                    "type": "basic",
                    "messages" : {
                        "data": {
                            "type": "gallery",
                            "value" : {
                                "items": [
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "http://botworx.s3.amazonaws.com/images/mh/homepage_landscape_slide_cropped.jpg",
                                            "title": "Manage Subscriptions",
                                            "subtitle": "Pick a subscription to manage."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "Avoid The Frizz",
                                                "nextNodes" : [
                                                    "MANAGE_AVOID_FRIZZ_SUB"
                                                ]
                                            },
                                            {
                                                "type": "button",
                                                "label": "Social Updates",
                                                "nextNodes": [
                                                    "MANAGE_SOCIAL_UPDATES_SUB"
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "HAIR_PROFILER": {
                    "type": "basic",
                    "label": "Hair Profiler",
                    "messages": {
                        "data" : {
                            "type": "text",
                            "value": {
                                "title" : "The perfect product for you ?"
                            },
                            "subtitle": "These three simple questions will help"
                        },
                        "actions" : [
                            {
                                "type": "button",
                                "label": "Start",
                                "nextNodes" : [
                                    "HAIR_TEXTURE"
                                ]
                            }
                        ]
                    }
                },
                "HAIR_TEXTURE": {
                    "type": "basic",
                    "label": "Hair texture",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "My hair texture is:"
                            }
                        },
                        "actions": [
                            {
                                "id": "thankYou",
                                "type": "quicktext",
                                "label" : [
                                    "Baby Fine to Fine"
                                ],
                                "nextNodes": [
                                    "HAIR_TEXTURE_BFF"
                                ]
                            },
                            {
                                "id": "thankYou",
                                "type": "quicktext",
                                "label": [
                                    "Medium to Coarse"
                                ],
                                "nextNodes": [
                                    "HAIR_TEXTURE_MTC"
                                ]
                            },
                            {
                                "id": "home",
                                "type": "quicktext",
                                "label": [
                                    "Very Coarse to Coily"
                                ],
                                "nextNodes": [
                                    "HAIR_TEXTURE_VCC"
                                ]
                            }
                        ]
                    }
                },
                "HAIR_TEXTURE_BFF": {
                    "type": "basic",
                    "label": "Hair type",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "My hair is colored or Chemically Straightened"
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Yes"
                                ],
                                "nextNodes": [
                                    "HAIR_TEXTURE_BFF_YES"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "No"
                                ],
                                "nextNodes": [
                                    "HAIR_TEXTURE_BFF_NO"
                                ]
                            }
                        ]
                    }
                },
                "HAIR_TEXTURE_MTC": {
                    "type": "basic",
                    "label": "Hair type",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "My hair is colored or Chemically Straightened"
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Yes"
                                ],
                                "nextNodes": [
                                    "HAIR_TEXTURE_MTC_YES"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "No"
                                ],
                                "nextNodes": [
                                    "HAIR_TEXTURE_MTC_NO"
                                ]
                            }
                        ]
                    }
                },
                "HAIR_TEXTURE_VCC": {
                    "type": "basic",
                    "label": "Hair type",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "My hair is colored or Chemically Straightened"
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Yes"
                                ],
                                "nextNodes": [
                                    "HAIR_TEXTURE_VCC_YES"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "No"
                                ],
                                "nextNodes": [
                                    "HAIR_TEXTURE_VCC_NO"
                                ]
                            }
                        ]
                    }
                },
                "HAIR_TEXTURE_BFF_YES": {
                    "type": "basic",
                    "label": "Required Style for BFF Yes",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "My Hair Styling Needs..."
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Add Volume"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "BFF-Y-AV"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "Straighten/Smooth"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "BFF-Y-SS"
                                ]
                            }
                        ]
                    }
                },
                "HAIR_TEXTURE_BFF_NO": {
                    "type": "basic",
                    "label": "Required Style for BFF No",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "My Hair Styling Needs..."
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Add Volume"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "BFF-N-AV"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "Straighten/Smooth"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "BFF-N-SS"
                                ]
                            }
                        ]
                    }
                },
                "HAIR_TEXTURE_MTC_YES": {
                    "type": "basic",
                    "label": "Required Style for MTC Yes",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "My Hair Styling Needs..."
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Straighten/Smooth"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "MTC-Y-SS"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "Curls"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "MTC-Y-C"
                                ]
                            }
                        ]
                    }
                },
                "HAIR_TEXTURE_MTC_NO": {
                    "type": "basic",
                    "label": "Required Style for MTC No",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "My Hair Styling Needs..."
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Straighten/Smooth"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "MTC-N-SS"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "Curls"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "MTC-N-C"
                                ]
                            }
                        ]
                    }
                },
                "HAIR_TEXTURE_VCC_YES": {
                    "type": "basic",
                    "label": "Required Style for VCC Yes",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "My Hair Styling Needs..."
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Straighten/Smooth"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "VCC-Y-SS"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "Natural"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "VCC-Y-N"
                                ]
                            }
                        ]
                    }
                },
                "HAIR_TEXTURE_VCC_NO": {
                    "type": "basic",
                    "label": "Required Style for VCC No",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "My Hair Styling Needs..."
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Straighten/Smooth"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "VCC-N-SS"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "Natural"
                                ],
                                "nextNodes": [
                                    "HAIR_PROFILER_RECOMMENDATIONS",
                                    "VCC-N-N"
                                ]
                            }
                        ]
                    }
                },
                "BFF-Y-AV": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data": {
                            "type": "gallery",
                            "value": {
                                "items": [
                                    {
                                        "id": "item1",
                                        "type": "image",
                                        "value" : {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_shampoo.jpg",
                                            "title": "Weightless Moisture Shampoo"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item2",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_conditioner.jpg",
                                            "title": "Weightless Moisture Conditioner"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item3",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_masque.jpg",
                                            "title": "Weightless Moisture Masque"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_dry_oil_mist.jpg",
                                            "title": "Weightless Moisture Dry Oil Mist"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-dry-oil-micro-mist.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/foaming_volumizer.jpg",
                                            "title": "Foaming Volumizer"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/foaming-volumizer.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/tousled_texture.jpg",
                                            "title": "Tousled Texture Finishing Spray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/tousled-texture-finishing-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "BFF-Y-SS": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "id": "item1",
                                        "type": "image",
                                        "value" : {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_shampoo.jpg",
                                            "title": "Weightless Moisture Shampoo"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item2",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_conditioner.jpg",
                                            "title": "Weightless Moisture Conditioner"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item3",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_masque.jpg",
                                            "title": "Weightless Moisture Masque"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_dry_oil_mist.jpg",
                                            "title": "Weightless Moisture Dry Oil Mist"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-dry-oil-micro-mist.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/blow_dry_lotion.jpg",
                                            "title": "Blow Dry Lotion"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/blow-dry-lotion.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/anti_humidity.jpg",
                                            "title": "Anti-Humidity Finishing Spray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/anti-humidity-finishing-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "BFF-N-AV": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "id": "item1",
                                        "type": "image",
                                        "value" : {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_shampoo.jpg",
                                            "title": "Weightless Moisture Shampoo"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item2",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_conditioner.jpg",
                                            "title": "Weightless Moisture Conditioner"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item3",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_masque.jpg",
                                            "title": "Weightless Moisture Masque"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_condition_mist.jpg",
                                            "title": "Weightless Moisture Conditioning Mist"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-conditioning-mist.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/foaming_volumizer.jpg",
                                            "title": "Foaming Volumizer"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/foaming-volumizer.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/tousled_texture.jpg",
                                            "title": "Tousled Texture Finishing Spray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/tousled-texture-finishing-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "BFF-N-SS": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "id": "item1",
                                        "type": "image",
                                        "value" : {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_shampoo.jpg",
                                            "title": "Weightless Moisture Shampoo"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item2",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_conditioner.jpg",
                                            "title": "Weightless Moisture Conditioner"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item3",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_masque.jpg",
                                            "title": "Weightless Moisture Masque"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/wm_condition_mist.jpg",
                                            "title": "Weightless Moisture Conditioning Mist"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/weightless-moisture-conditioning-mist.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/blow_dry_lotion.jpg",
                                            "title": "Blow Dry Lotion"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/blow-dry-lotion.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/anti_humidity.jpg",
                                            "title": "Anti-Humidity Finishing Spray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/anti-humidity-finishing-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "MTC-Y-SS": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_shampoo.jpg",
                                            "title": "Nourishing Moisture Shampoo",
                                            "subtitle": "Rehydrates, cleanses and rebalances damaged hair while protecting color."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_conditioner.jpg",
                                            "title": "Nourishing Moisture Conditioner",
                                            "subtitle": "Promotes healthy hair by replenishing and moisturizing hair and scalp."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_masque.jpg",
                                            "title": "Nourishing Moisture Masque",
                                            "subtitle": "Hair masque that helps gain ultra hydration while detangling and reducing frizz."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_oil_treatment.jpg",
                                            "title": "Nourishing Moisture Oil Treatment",
                                            "subtitle": "Oil treatment that hydrates, provides UV protection and repairs damaged hair."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-oil-treatment.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/blow_dry_lotion.jpg",
                                            "title": "Blow Dry Lotion"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/blow-dry-lotion.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/anti_humidity.jpg",
                                            "title": "Anti-Humidity Finishing Spray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/anti-humidity-finishing-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "MTC-Y-C": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_shampoo.jpg",
                                            "title": "Nourishing Moisture Shampoo",
                                            "subtitle": "Rehydrates, cleanses and rebalances damaged hair while protecting color."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_conditioner.jpg",
                                            "title": "Nourishing Moisture Conditioner",
                                            "subtitle": "Promotes healthy hair by replenishing and moisturizing hair and scalp."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_masque.jpg",
                                            "title": "Nourishing Moisture Masque",
                                            "subtitle": "Hair masque that helps gain ultra hydration while detangling and reducing frizz."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_oil_treatment.jpg",
                                            "title": "Nourishing Moisture Oil Treatment",
                                            "subtitle": "Oil treatment that hydrates, provides UV protection and repairs damaged hair."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-oil-treatment.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/activating_curl_cream.jpg",
                                            "title": "Activating Curl Cream"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/activating-curl-cream.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/flex_hold.jpg",
                                            "title": "Flex Hold Shaping Hairspray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/flex-hold-shaping-hairspray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "MTC-N-SS": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "id": "item1",
                                        "type": "image",
                                        "value" : {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_shampoo.jpg",
                                            "title": "Nourishing Moisture Shampoo",
                                            "subtitle": "Rehydrates, cleanses and rebalances damaged hair while protecting color."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item2",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_conditioner.jpg",
                                            "title": "Nourishing Moisture Conditioner",
                                            "subtitle": "Promotes healthy hair by replenishing and moisturizing hair and scalp."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item3",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_masque.jpg",
                                            "title": "Nourishing Moisture Masque",
                                            "subtitle": "Hair masque that helps gain ultra hydration while detangling and reducing frizz."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_oil_spray.jpg",
                                            "title": "Oil Spray",
                                            "subtitle": "Reduces blow-dry time and infuses moisture, softness, protection and shine."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-oil-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/blow_dry_lotion.jpg",
                                            "title": "Blow Dry Lotion"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/blow-dry-lotion.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/anti_humidity.jpg",
                                            "title": "Anti-Humidity Finishing Spray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/anti-humidity-finishing-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "MTC-N-C": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "id": "item1",
                                        "type": "image",
                                        "value" : {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_shampoo.jpg",
                                            "title": "Nourishing Moisture Shampoo",
                                            "subtitle": "Rehydrates, cleanses and rebalances damaged hair while protecting color."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item2",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_conditioner.jpg",
                                            "title": "Nourishing Moisture Conditioner",
                                            "subtitle": "Promotes healthy hair by replenishing and moisturizing hair and scalp."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item3",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_masque.jpg",
                                            "title": "Nourishing Moisture Masque",
                                            "subtitle": "Hair masque that helps gain ultra hydration while detangling and reducing frizz."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/nm_oil_spray.jpg",
                                            "title": "Oil Spray",
                                            "subtitle": "Reduces blow-dry time and infuses moisture, softness, protection and shine."
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/care-and-treatment/nourishing-moisture/nourishing-moisture-oil-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/activating_curl_cream.jpg",
                                            "title": "Activating Curl Cream"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/activating-curl-cream.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/flex_hold.jpg",
                                            "title": "Flex Hold Shaping Hairspray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/flex-hold-shaping-hairspray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "VCC-Y-SS": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "id": "item1",
                                        "type": "image",
                                        "value" : {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_shampoo.jpg",
                                            "title": "Ultra Rich Moisture Shampoo"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item2",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_conditioner.jpg",
                                            "title": "Ultra Rich Moisture Conditioner"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item3",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_masque.jpg",
                                            "title": "Ultra Rich Moisture Masque"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_oil_treatment.jpg",
                                            "title": "Ultra Rich Moisture Oil Treatment"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-oil-treatment.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/blow_dry_lotion.jpg",
                                            "title": "Blow Dry Lotion"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/blow-dry-lotion.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/anti_humidity.jpg",
                                            "title": "Anti-Humidity Finishing Spray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/anti-humidity-finishing-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "VCC-Y-N": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "id": "item1",
                                        "type": "image",
                                        "value" : {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_shampoo.jpg",
                                            "title": "Ultra Rich Moisture Shampoo"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item2",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_conditioner.jpg",
                                            "title": "Ultra Rich Moisture Conditioner"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item3",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_masque.jpg",
                                            "title": "Ultra Rich Moisture Masque"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_oil_treatment.jpg",
                                            "title": "Ultra Rich Moisture Oil Treatment"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-oil-treatment.html/"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/curl_enhancing_spray.jpg",
                                            "title": "Curl Enhancing Spray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/curl-enhancing-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/taming_curl_cream.jpg",
                                            "title": "Taming Curl Cream"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/taming-curl-cream.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "VCC-N-SS": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "id": "item1",
                                        "type": "image",
                                        "value" : {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_shampoo.jpg",
                                            "title": "Ultra Rich Moisture Shampoo"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item2",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_conditioner.jpg",
                                            "title": "Ultra Rich Moisture Conditioner"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item3",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_masque.jpg",
                                            "title": "Ultra Rich Moisture Masque"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_oil_treatment.jpg",
                                            "title": "Ultra Rich Moisture Oil Treatment"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-oil-treatment.html/"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/blow_dry_lotion.jpg",
                                            "title": "Blow Dry Lotion"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/blow-dry-lotion.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/anti_humidity.jpg",
                                            "title": "Anti-Humidity Finishing Spray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/anti-humidity-finishing-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "VCC-N-N": {
                    "type": "basic",
                    "label": "Menu options ",
                    "messages": {
                        "data" : {
                            "type": "gallery",
                            "value": {
                                "items" : [
                                    {
                                        "id": "item1",
                                        "type": "image",
                                        "value" : {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_shampoo.jpg",
                                            "title": "Ultra Rich Moisture Shampoo"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-shampoo.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item2",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_conditioner.jpg",
                                            "title": "Ultra Rich Moisture Conditioner"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-conditioner.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item3",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_masque.jpg",
                                            "title": "Ultra Rich Moisture Masque"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-masque.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item4",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/urm_oil_treatment.jpg",
                                            "title": "Ultra Rich Moisture Oil Treatment"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/ultra-rich-moisture-oil-treatment.html/"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item5",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/curl_enhancing_spray.jpg",
                                            "title": "Curl Enhancing Spray"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/curl-enhancing-spray.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    },
                                    {
                                        "id": "item6",
                                        "type": "image",
                                        "value": {
                                            "url": "https://s3.amazonaws.com/bot-v1/taming_curl_cream.jpg",
                                            "title": "Taming Curl Cream"
                                        },
                                        "actions": [
                                            {
                                                "type": "button",
                                                "label": "More Info",
                                                "url" : "http://macadamiahair.com/taming-curl-cream.html"
                                            },
                                            {
                                                "type": "button",
                                                "subtype" : "share"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "HAIR_PROFILER_RECOMMENDATIONS": {
                    "type": "basic",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "Here are your recommended products:"
                            }
                        }
                    }
                },
                "CHECK_CHAT_STATE": {
                    "type": "conditional",
                    "onEntryPlugins": [],
                    "expression": "{{data.chat.chatMode}}",
                    "conditions": [
                        {
                            "case": "true",
                            "nextNodes": [
                                "CONFIRM_END_CHAT"
                            ]
                        },
                        {
                            "case": "expression !== 'true'",
                            "nextNodes": [
                                "CONFIRM_START_CHAT"
                            ]
                        }
                    ]
                },
                "CONFIRM_START_CHAT": {
                    "type": "basic",
                    "messages" : {
                        "data": {
                            "type": "text",
                            "value" : {
                                "title": "Do you want to contact customer support?"
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Yes"
                                ],
                                "nextNodes": [
                                    "START_CHAT"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "No"
                                ],
                                "nextNodes": [
                                    "HOME"
                                ]
                            }
                        ]
                    }
                },
                "START_CHAT": {
                    "type": "basic",
                    "onEntryPlugins": [
                        {
                            "name": "chat",
                            "method": "start",
                            "params" : {
                                "expiryInMinutes": 2880
                            }
                        }
                    ],
                    "messages": [
                        {
                            "data": {
                                "type": "text",
                                "value": {
                                    "title": "You are now connected to support. We will get back to you shortly."
                                }
                            }
                        },
                        {
                            "data" : {
                                "type": "text",
                                "value": {
                                    "title" : "Type or select 'End Support' to go back to automated system.\n"
                                }
                            }
                        },
                        {
                            "data": {
                                "type": "text",
                                "value": {
                                    "title": "Connected to Support"
                                }
                            },
                            "actions": [
                                {
                                    "type": "button",
                                    "label": "End Support",
                                    "nextNodes" : [
                                        "CONFIRM_END_CHAT"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "CONFIRM_END_CHAT": {
                    "type": "basic",
                    "messages" : {
                        "data": {
                            "type": "text",
                            "value" : {
                                "title": "You are currently connected to customer support. Would you like to return to the automated system?"
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Yes"
                                ],
                                "nextNodes": [
                                    "END_CHAT"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "No"
                                ],
                                "nextNodes": [
                                    "START_CHAT"
                                ]
                            }
                        ]
                    }
                },
                "END_CHAT": {
                    "type": "basic",
                    "onEntryPlugins": [
                        {
                            "name": "chat",
                            "method": "end",
                            "params" : {}
                        }
                    ],
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "You are no longer connected to support. Please type 'support' to contact customer support again.\n\nThank you."
                            }
                        },
                        "actions": [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Home"
                                ],
                                "nextNodes": [
                                    "HOME"
                                ]
                            }
                        ]
                    }
                },
                "UNRECOGNIZED": {
                    "type": "basic",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "Sorry we didn't recognize your request."
                            }
                        },
                        "actions" : [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Home"
                                ],
                                "nextNodes": [
                                    "HOME"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "Help"
                                ],
                                "nextNodes": [
                                    "HELP"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "Support"
                                ],
                                "nextNodes": [
                                    "CHECK_CHAT_STATE"
                                ]
                            }
                        ]
                    }
                },
                "UNRECOGNIZED_SENTENCE": {
                    "type": "basic",
                    "messages": {
                        "data": {
                            "type": "text",
                            "value": {
                                "title": "Sorry we didn't recognize your request. Do you want to contact customer support?"
                            }
                        },
                        "actions" : [
                            {
                                "type": "quicktext",
                                "label": [
                                    "Yes"
                                ],
                                "nextNodes": [
                                    "START_CHAT"
                                ]
                            },
                            {
                                "type": "quicktext",
                                "label": [
                                    "No"
                                ],
                                "nextNodes": [
                                    "HOME"
                                ]
                            }
                        ]
                    }
                },
                "UNRECOGNIZED_INPUT": {
                    "type": "conditional",
                    "expression": "{{message.text}}",
                    "conditions": [
                        {
                            "case": "expression.match(/^\\s*\\S+(?:\\s+\\S+){2,}\\s*$/)",
                            "nextNodes": [
                                "UNRECOGNIZED_SENTENCE"
                            ]
                        },
                        {
                            "case": "!expression.match(/^\\s*\\S+(?:\\s+\\S+){2,}\\s*$/)",
                            "nextNodes": [
                                "UNRECOGNIZED"
                            ]
                        }
                    ]
                }
            }
        }

}