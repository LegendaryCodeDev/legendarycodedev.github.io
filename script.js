
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for BitLife dropdown item
    document.getElementById('bitlife-dropdown-item').addEventListener('click', function(event) {
        event.preventDefault();
        var bitlifeGameContent = document.getElementById('bitlife-game');
        bitlifeGameContent.style.display = bitlifeGameContent.style.display === 'none' ? 'block' : 'none';
    });
});

function toggleRammerhead() {
    var rammerheadContent = document.getElementById('rammerhead-content');
    rammerheadContent.style.display = rammerheadContent.style.display === 'none' ? 'block' : 'none';
}
