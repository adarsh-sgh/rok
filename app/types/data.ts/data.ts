export interface Tenant {
  readonly color1: string;
  readonly color2: string;
  readonly cards: ReadonlyArray<{
    readonly title: string;
    readonly description: string;
    readonly action: string;
    readonly actionLink: string;
  }>;
}

export type Tenants = {
  [key: string]: Tenant;
};
