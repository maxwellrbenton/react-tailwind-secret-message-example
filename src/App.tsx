function UnlockableContent() {
  return (
    <>
      <div id="hiddenUnlessSmall" className="md:hidden">
        <span>This content is displayed on screens less than 768px wide </span>
      </div>
      <div id="hiddenUnlessMedium" className="hidden md:block">
        <span>This content is displayed on screens bigger than 768px wide</span>
      </div>
    </>
  );
}

export default UnlockableContent;
