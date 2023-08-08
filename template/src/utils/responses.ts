import { response } from "@stricjs/utils";

export const badReq = response('Invalid request', { status: 400 });
