/* ACS service setup
 * UUIDs used by the services
 * Copyright 2023 AMRC
 */

export const Clusters = {
    App: {
        Bootstrap:          "88436128-09a3-4c9c-b7f4-b0e495137265",
        Flux:               "72804a19-636b-4836-b62b-7ad1476f2b86",
        HelmRelease:        "88436128-09a3-4c9c-b7f4-b0e495137265",
        HelmTemplate:       "729fe070-5e67-4bc7-94b5-afd75cb42b03",
    },
    Class: {
        HelmChart:          "f9be0334-0ff7-43d3-9d8a-188d3e4d472b",
    },
};

export const Git = {
    App: {
        Config:     "38d62a93-b6b4-4f63-bad4-d433e3eaff29",
    },
    Class: {
        Repo:       "d25f2afc-1ab8-4d27-b51b-d02314624e3e",
        Group:      "b03d4dfe-7e78-4252-8e62-af594cf316c9",
    },
    Service: {
        Git:        "7adf4db0-2e7b-4a68-ab9d-376f4c5ce14b",
    },
    Perm: {
        All:        "c0c55c78-116e-4526-8ff4-e4595251f76c",
        Create:     "3668660f-f949-4657-be76-21967144c1a2",
        Delete:     "55870092-91b6-4d5e-828f-7637d080bf1c",
        Pull:       "12ecb694-b4b9-4d2a-927e-d100019f7ebe",
        Push:       "b2d8d437-5060-4202-bcc2-bd2beda09651",
    },
};