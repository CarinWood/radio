export interface LiveAudio {
    id: number;
    url: string;
    statkey: string;
  }
  
  export interface RadioItem {
    image: string;
    name: string;
    channeltype: string;
    color: string;
    id: number;
    imagetemplate: string;
    liveaudio: LiveAudio;
    scheduleurl: string;
    siteurl: string;
    tagline: string;
    xmltvid: string;
  }
  
  export interface RadioProps {
    p1: RadioItem;
    p2: RadioItem;
    p3: RadioItem;
  }

  export interface AllChannelsProps {
    p1: RadioItem;
    p2: RadioItem;
    p3: RadioItem;
    p4Blekinge: RadioItem
    p4Dalarna: RadioItem
    p4Gotland: RadioItem
    p4Gavleborg: RadioItem
    p4Goteborg: RadioItem
    p4Halland: RadioItem
    p4Jamtland: RadioItem
  }