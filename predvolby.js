/* Předvolby telefonu pro formuláře (košík, rezervace) — podle prototypu Pickerly 11/2026:
   nahoře CZ, SK, DE, AT, PL, ES, pod oddělovačem další státy EU a Evropy abecedně.
   Použití: options="{{ prefixes }}" v Select, kde prefixes = window.VappPredvolby.options() */
(function(){
  var TOP = ["CZ", "SK", "DE", "AT", "PL", "ES"];
  var ALL = {"AT": ["Rakousko", "+43"], "BE": ["Belgie", "+32"], "BG": ["Bulharsko", "+359"], "HR": ["Chorvatsko", "+385"], "CY": ["Kypr", "+357"], "CZ": ["Česko", "+420"], "DK": ["Dánsko", "+45"], "EE": ["Estonsko", "+372"], "FI": ["Finsko", "+358"], "FR": ["Francie", "+33"], "DE": ["Německo", "+49"], "GR": ["Řecko", "+30"], "HU": ["Maďarsko", "+36"], "IE": ["Irsko", "+353"], "IT": ["Itálie", "+39"], "LV": ["Lotyšsko", "+371"], "LT": ["Litva", "+370"], "LU": ["Lucembursko", "+352"], "MT": ["Malta", "+356"], "NL": ["Nizozemsko", "+31"], "PL": ["Polsko", "+48"], "PT": ["Portugalsko", "+351"], "RO": ["Rumunsko", "+40"], "SK": ["Slovensko", "+421"], "SI": ["Slovinsko", "+386"], "ES": ["Španělsko", "+34"], "SE": ["Švédsko", "+46"], "NO": ["Norsko", "+47"], "CH": ["Švýcarsko", "+41"], "GB": ["Spojené království", "+44"], "IS": ["Island", "+354"], "LI": ["Lichtenštejnsko", "+423"]};
  function opt(c, sep){ var x = ALL[c]; return { value:x[1], label:x[1], note:x[0], img:'vlajky/flag-' + c.toLowerCase() + '.svg', sep:!!sep }; }
  window.VappPredvolby = {
    options: function(){
      var rest = Object.keys(ALL).filter(function(c){ return TOP.indexOf(c) < 0; }).sort(function(a,b){ return ALL[a][0].localeCompare(ALL[b][0], 'cs'); });
      return TOP.map(function(c){ return opt(c); }).concat(rest.map(function(c,i){ return opt(c, i === 0); }));
    }
  };
})();
