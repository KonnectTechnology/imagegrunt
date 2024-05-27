export class PmeImage {
  uniqueid: string;
  origurl: string;
  origdata: Uint8Array;
  origsize: number;
  origwidth: number;
  origheight: number;

  constructor(
    inuniqueid: string,
    inorigurl: string,
    inorigdata: Uint8Array,
    inorigsize: number,
    inorigwidth: number,
    inorigheight: number
  ) {
    this.uniqueid = inuniqueid;
    this.origurl = inorigurl;
    this.origdata = inorigdata;
    this.origsize = inorigsize;
    this.origwidth = inorigwidth;
    this.origheight = inorigheight;
  }
}
