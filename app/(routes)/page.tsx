import React from "react";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import getBillboards from "@/actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboards = await getBillboards("66fda2b68cbd505786c8de1a");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
      </div>
    </Container>
  );
};

export default HomePage;
