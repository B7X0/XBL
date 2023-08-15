const st = document.getElementById('st');
const dt = document.getElementById('dt');
fetch('https://api.weao.dev/status')
  .then(response => response.json())
  .then(bspl => {
    let item = bspl["Data"]["WeAreDevs API"]["platform"]["Windows"];
    const milliseconds = item["upd_unix"] * 1000
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString()
    dt.innerHTML = "Last update: " + dateObject.toLocaleString("en-US", {timeZoneName: "short"});
      if ((item["status"]) === 0) {
        console.log('✅ Updated');
        st.innerHTML = "Working";
        st.className = 'text-success';
      } else {
        console.log('⛔️ Patched');
        st.innerHTML = "Patched";
        st.className = 'text-danger';
      }
});




