import * as React from "react";
import ImageStrip from "src/components/ImageStrip";
import Section from "src/components/Section";
import styled from "styled-components";
import deltaPolars from "./deltaPolars.png";
import deltaSharing from "./deltaSharing.png";
import deltaConstraints from "./deltaConstraints.png";
import deleteRows from "./deleteRows.png";
import deltaLakeSagemakerEMR from "./delta-lake-sagemaker-emr.png";

const updates = [
  {
    title: "Reading Delta Lake Tables into Polars DataFrames",
    thumbnail: deltaPolars,
    url: "/blog/2022-12-22-reading-delta-lake-tables-polars-dataframe/",
  },
  {
    title:
      "Building a more efficient data infrastructure for machine learning with Open Source using Delta Lake, Amazon SageMaker, and EMR",
    thumbnail: deltaLakeSagemakerEMR,
    url: "/blog/2022-12-13-sagemaker-emr-delta-lake/",
  },
  {
    title: "Data Sharing across Government Agencies using Delta Sharing",
    thumbnail: deltaSharing,
    url: "/blog/2022-12-08-data-sharing-across-government-delta-sharing/",
  },
  {
    title: "How to Delete Rows from a Delta Lake Table",
    thumbnail: deleteRows,
    url: "/blog/2022-12-07-delete-rows-from-delta-lake-table/",
  },
  {
    title: "Delta Lake Constraints and Checks",
    thumbnail: deltaConstraints,
    url: "/blog/2022-11-21-delta-lake-contraints-check/",
  },
];

const CenteredImageStrip = styled(ImageStrip)`
  text-align: center;
`;

const LatestUpdateSection = () => (
  <Section
    background={(theme) => theme.light.bg}
    title="The Latest"
    titleSize="h5"
    centeredHeader
    padding="xxxl"
  >
    <CenteredImageStrip items={updates} />
  </Section>
);

export default LatestUpdateSection;
