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
    startRadio: (name: string) => void
  }

  export interface AllChannelsProps {
    channels: RadioItem[];
    startRadio: (name: string) => void
  }

  export interface ChannelProps {
      name: string
      img: string
      startRadio: (name: string) => void
  }

  export interface RadioNowProps {
      radioNow: string
  }

