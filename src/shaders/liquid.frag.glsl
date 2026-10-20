uniform float uTime;
uniform vec2 uResolution;

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
     float wave = sin(
        uv.x * 12.0 + sin(uv.y * 8.0 + uTime) * 2.0
     );

     vec3 yellow = vec3(1.0, 0.85, 0.2);
     vec3 orange = vec3(1.0, 0.55, 0.0);

     float blend = wave * 0.5 + 0.5;

     vec3 color = mix(yellow, orange, blend);

     gl_FragColor = vec4(color, 1.0);
}