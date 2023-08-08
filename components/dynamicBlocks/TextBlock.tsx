import SerializeContent from "../../lib/SerializeContent";

export default function TextBlock({ content }: any) {
  const { textBlockContent, fontSize, fontWeight, textColor } = content;
  return (
    <div>
      <SerializeContent
        contentToSerialize={textBlockContent}
        textColor={textColor}
        textFontSize={fontSize}
        textFontWeight={fontWeight}
      />
    </div>
  );
}
