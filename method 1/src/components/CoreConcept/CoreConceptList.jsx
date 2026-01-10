import CoreConcept from "./CoreConcept";
import "./CoreConcept.css";

export default function CoreConceptList({ concepts }) {
  return concepts.map((concept) => (
    <CoreConcept key={concept.title} {...concept} />
  ));
}
