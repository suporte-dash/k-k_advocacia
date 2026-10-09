type SectionMarkerProps = {
  number: string;
  label: string;
  light?: boolean;
  className?: string;
};

export default function SectionMarker({ number, label, light = false, className = "" }: SectionMarkerProps) {
  return (
    <div className={`section-marker ${light ? "section-marker-light" : ""} ${className}`.trim()}>
      <span className="marker-number">{number}</span>
      <span className="marker-rule" aria-hidden="true" />
      <span className="marker-label">{label}</span>
    </div>
  );
}
