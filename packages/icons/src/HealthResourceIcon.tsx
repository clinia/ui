import { Icon } from "@clinia-ui/react";

export const HealthResourceIcon = (
  props: React.ComponentProps<typeof Icon>
) => (
  <Icon
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="currentcolor"
    {...props}
  >
    <path d="M912 74.8023C912 52.3412 893.804 34.1328 871.357 34.1328H160.11C137.663 34.1328 119.467 52.3412 119.467 74.8023V949.197C119.467 971.658 137.663 989.866 160.11 989.866H871.357C893.804 989.866 912 971.658 912 949.197V74.8023ZM200.533 116.266H830.933V908.799H200.533V116.266ZM555.733 688V552.533H691.2C713.586 552.533 731.734 534.386 731.734 512C731.734 489.614 713.586 471.467 691.2 471.467H555.733V336C555.733 313.614 537.586 295.467 515.2 295.467C492.814 295.467 474.667 313.614 474.667 336V471.467H339.2C316.814 471.467 298.667 489.614 298.667 512C298.667 534.386 316.814 552.533 339.2 552.533H474.667V688C474.667 710.386 492.814 728.533 515.2 728.533C537.586 728.533 555.733 710.386 555.733 688Z" />
  </Icon>
);
