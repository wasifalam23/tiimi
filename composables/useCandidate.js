export default function useCandidate() {
  const currentCandidate = ref({});

  function setCandidate(value) {
    currentCandidate.value = value;
  }
  return [currentCandidate, setCandidate];
}
